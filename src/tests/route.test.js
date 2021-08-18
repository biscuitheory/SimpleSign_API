import container from '../container';
import request from 'supertest';

let app = container.resolve('server').app

describe('GET /', () => {
  it('should return 200 & valid response with Hello world !', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toMatchObject({ message: 'Hello World !' });
        done();
      });
  });
});
