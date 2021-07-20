import cors from 'cors';

class Server {
  constructor({ express }) {
    this.app = express();
    this.initializeBodyParsing(express);
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

  listen(port) {
    this.app.listen(port, () => console.log(`application started on port: ${port}`))
  }
}

export default Server;
