const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const extractJWT = require('passport-jwt').ExtractJwt;

const Doctor = require('../models/doctor');

let opts = {
    jwtFromRequest : extractJWT.fromAuthHeaderAsBearerToken,
    secretOrKey : 'hospital'
}

passport.use(new JWTStrategy(opts,function(jwtPayLoad,done){
    console.log('JWT',jwtPayLoad._id);
    Doctor.findById(jwtPayLoad._id,function(err,user){
        if(err){
            console.log("error in finding user from JWT",err);
            return;
        }
        if(user){
            return done(null,user);
        }
        else{
            return done(null,false);
        }
    });

}));

module.exports = passport;