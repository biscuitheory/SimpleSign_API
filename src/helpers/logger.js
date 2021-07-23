class Logger {
  constructor({ winston }) {
    this.logger = winston.createLogger({
      format: winston.format.json(),
      transports: [
        new winston.transports.File({
          filename: 'src/logs/error.log',
          level: 'error',
        }),
        new winston.transports.File({
          filename: 'src/logs/combined.log',
        }),
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
          ),
        }),
      ],
    });

    this.stream = {
      write: (msg) => this.logger.info(msg),
    };
  }

  log(status, err) {
    if (status < 500) this.logger.log('warn', err);
    else {
      this.logger.log('error', err);
    }
  }
}

export default Logger;
