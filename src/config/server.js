import cors from 'cors';
class Server {
  constructor({ express, logger }) {
    this.app = express();
    this.initializeBodyParsing(express);

    this.app.use((err, req, res, next) => {
      err.statusCode = (err.statusCode) ? err.statusCode : 500;
      logger.log(err.statusCode, err)
    })
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
