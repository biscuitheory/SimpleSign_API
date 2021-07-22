import cors from 'cors';

class Server {
  constructor({ express, routes }) {
    this.app = express();
    this.initializeBodyParsing(express);
    this.initializeApplicationRouter(routes);
  }

  initializeBodyParsing(express) {
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
    this.app.use(
      cors({
        origin: 'http://localhost:1234',
        credentials: true,
      })
    );
  }

  initializeApplicationRouter(routes) {
    this.app.use(routes);
  }

  listen(port) {
    this.app.listen(port, () =>
      console.log(`application started on port: ${port}`)
    );
  }
}

export default Server;
