import { createContainer, Lifetime, asClass, asValue } from 'awilix';
import express, { Router } from 'express';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import csurf from 'csurf';
import winston from 'winston';
import morgan from 'morgan';
import Logger from './helpers/logger';
import { ApiError, handleError } from './helpers/error';
import Server from './config/server';
import config from './config/env';
import db from './config/database';

const container = createContainer();
const router = Router();
const csrfMiddleware = csurf({ cookie: true });

container.register({
  config: asValue(config),
  db: asValue(db),
  bcrypt: asValue(bcrypt),
  uuidv4: asValue(uuidv4),
  cookieParser: asValue(cookieParser),
  jwt: asValue(jwt),
  csrfMiddleware: asValue(csrfMiddleware),
  ApiError: asValue(ApiError),
  handleError: asValue(handleError),
  morgan: asValue(morgan),
  winston: asValue(winston),
  logger: asClass(Logger),
  express: asValue(express),
  router: asValue(router),
});

container.loadModules(
  ['modules/**/*!(Dao$).js', 'middlewares/*!(index).js', 'libs/*!(index).js'],
  {
    resolverOptions: {
      lifetime: Lifetime.SINGLETON,
    },
    cwd: __dirname,
  }
);

container.loadModules(['modules/**/*Dao.js'], {
  resolverOptions: {
    lifetime: Lifetime.SINGLETON,
    register: asValue,
  },
  cwd: __dirname,
});

// Resolve the registered routes
const routesName = Object.keys(container.registrations).filter((item) =>
  item.match(/Router$/g)
);
const routes = routesName.map((route) => container.resolve(route));

// register all the routes and the server
container.register({
  routes: asValue(routes),
  server: asClass(Server).singleton(),
});

export default container;
