class Logger {
  constructor({ winston }) {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      defaultMeta: { service: 'user-service' },
      transports: [
        //
        // - Write all logs with level `error` and below to `error.log`
        // - Write all logs with level `info` and below to `combined.log`
        //
        new winston.transports.File({
          filename: 'src/logs/error.log',
          level: 'error',
        }),
        new winston.transports.File({ filename: 'src/logs/combined.log' }),
        new winston.transports.Console({
          json: true,
          colorize: true,
        }),
      ],
    });
  }

  log(status, err) {
    if (status < 500) this.logger.log('warn', err);
    else {
      this.logger.log('error', err);
    }
  }
}

export default Logger;
