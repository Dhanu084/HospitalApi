process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
let Doctor = require('../models/doctor');
let server = require('../index');

chai.should();

chai.use(chaiHttp);

describe('/POST patient',()=>{
    it('it should register a patient', (done) => {
        let patient = {
          name: "Dhanush",
          number:12336709
        }
        chai.request(server)
          .post('/api/v1/patients/register')
          .send(patient)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('data');
            res.body.should.have.property('message');
            done();
          });
      });
});

