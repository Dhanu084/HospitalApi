process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
let Doctor = require('../models/doctor');
let server = require('../index');

chai.should();

chai.use(chaiHttp);

describe('/POST/:patient_id/report',()=>{
    it('create a report for the patient', (done) => {
        let id="5eb6a7f98c416f4638e26428";
        let patient={
            status:"positive"
        }
        chai.request(server)
          .post('/api/v1/patients/'+id+'/create_report')
          .send(patient)
          .end((err, res) => {
              if(err) return done(err);
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('data');
            //res.body.should.have.property('message').eql('Internal Server Error');
            done();
          });
      });
});


describe('/GET Patient Report',()=>{
    it('it should get all reports of a patient', (done) => {
        let id="5eb6a7f98c416f4638e26428";
        chai.request(server)
          .get('/api/v1/patients/'+id+'/all_reports')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('data');
            done();
          });
      });
});

describe('/GET All Reports and Patients based on Status',()=>{
    it('it should get all reports of a patient', (done) => {
        let status="positive";
        chai.request(server)
          .get('/api/v1/reports/'+status)
          .send(status)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('data');
            done();
          });
      });
});