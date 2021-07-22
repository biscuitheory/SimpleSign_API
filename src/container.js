import { createContainer, Lifetime, asClass, asValue } from 'awilix';
import express, { Router } from 'express';
import Server from './config/server';
import config from './config/env';
import db from './config/database';

const container = createContainer();
const router = Router();

container.register({
  config: asValue(config),
  db: asValue(db),
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
