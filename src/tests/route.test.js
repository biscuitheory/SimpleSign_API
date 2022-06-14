import container from '../container';
import request, { agent } from 'supertest';

let app = container.resolve('server').app;

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

describe('GET /kiwi', () => {
  it('should return 200 & valid response with Hello world !', (done) => {
    request(app)
      .get('/kiki')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toMatchObject({ message: 'A wild kiwi appeared !' });
        done();
      });
  });
});

describe('POST /classtutors', () => {
  it('should send a 401', (done) => {
    agent(app)
      .post('/classtutors')
      .set('auth-cookie', '56565', { expires: false, httpOnly: true })
      .send()
      .expect(401)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });
});
