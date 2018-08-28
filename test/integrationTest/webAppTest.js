const app = require('../../app');
const assert = require('chai').assert;
const request = require('supertest');

let imageMIMETypes = ['image/jpeg', 'image/png'];

let isValidImage = (res) => {
  assert.include(imageMIMETypes, res.header['content-type']);
};

describe('#Wallpaper App', () => {

  describe('GET /', () => {
    it('should respond with not found response', done => {
      request(app)
        .get("/")
        .expect(404, done);
    });
  });

  describe('GET /wallpaper', () => {
    it('should respond with ok reponse and a image', (done) => {
      request(app)
        .get('/wallpaper')
        .expect(200)
        .expect(isValidImage)
        .end(done);
    });
  });
});
