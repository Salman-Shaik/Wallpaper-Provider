const app = require('../../app');
const request = require('supertest');

describe('#Wallpaper App',()=>{
  it('should respond with ok reponse and a image',(done)=>{
    request(app)
      .get('/wallpaper')
      .expect('HI')
      .expect(200)
      .end(done);
  });
});
