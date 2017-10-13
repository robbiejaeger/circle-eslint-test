process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);

describe('GET /api/v1/breads', () => {
  it('should return all breads', (done) => {
    chai.request(server)
      .get('/api/v1/breads')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.length.should.equal(2);

        res.body[0].should.have.property('id');
        res.body[0].id.should.equal(1);
        res.body[0].should.have.property('type');
        res.body[0].type.should.equal('sourdough');
        
        res.body[1].should.have.property('id');
        res.body[1].id.should.equal(2);
        res.body[1].should.have.property('type');
        res.body[1].type.should.equal('rye');
        done();
      });
  });
});