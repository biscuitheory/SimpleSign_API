import container from './src/container';

const application = container.resolve('server');
const config = container.resolve('config');

application.listen(config.app_port);
