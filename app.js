import container from './src/container';

// console.log('BABA', container.resolve('routes')[0].stack)
// console.log('BABA', container.resolve('express')())
// console.log('BABA', container.resolve('server').app)
// console.log('BABA', container.resolve('router').route('/'))

const application = container.resolve('server');
const config = container.resolve('config');

application.listen(config.app_port);
