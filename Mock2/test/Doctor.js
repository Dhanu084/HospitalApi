process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
let Doctor = require('../models/doctor');
let server = require('../index');

chai.should();

chai.use(chaiHttp);

describe('/POST doctor',()=>{
    it('it should not register a doctor without username and password fields', (done) => {
        let doctor = {
          name: "Dhanush"
        }
        chai.request(server)
          .post('/api/v1/doctors/register')
          .send(doctor)
          .end((err, res) => {
            res.should.have.status(500);
            res.body.should.be.a('object');
            res.body.should.have.property('message');
            res.body.should.have.property('message').eql('Internal Server Error');
            done();
          });
      });
});
describe('/POST doctor',()=>{
    it('it should register a doctor', (done) => {
        let doctor = {
          name: "Dhanush",
          password:"Dhanush"
        }
        chai.request(server)
          .post('/api/v1/doctors/register')
          .send(doctor)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message');
            done();
          });
      });
});

describe('/POST doctor with wrong password',()=>{
  it('it should return invalid username/password if username or password doesnt match', (done) => {
      let doctor = {
        id:"5eb68fbb90ca1b3cf4b6fffa",
        name: "Dhanush",
        password:"kfksavfaskv"
      }
      chai.request(server)
        .post('/api/v1/doctors/login')
        .send(doctor)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have.property('message').eql('Invalid username/password')
          done();
        });
    });
});

describe('/POST doctor',()=>{
    it('it should get the JWT token of the logged in doctor', (done) => {
        let doctor = {
          id:"5eb68fbb90ca1b3cf4b6fffa",
          name: "Dhanush",
          password:"Dhanush"
        }
        chai.request(server)
          .post('/api/v1/doctors/login')
          .send(doctor)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message');
            res.body.should.have.property('token');
            res.body.should.have.property('message').eql('Sign in successful');
            done();
          });
      });
});