
const User = require('./model/User'); // Your User model
const dotenv = require('dotenv');
const { fromAuthHeaderAsBearerToken } = require('passport-jwt').ExtractJwt;
const JWTStrategy = require('passport-jwt').Strategy;
dotenv.config();



exports.jwtStrategy = new JWTStrategy(
  {
    jwtFromRequest: fromAuthHeaderAsBearerToken(),
    secretOrKey:  process.env.JWT_SECRET,
  },
  async (jwtPayload, done) => {
    // if (Date.now() > jwtPayload.exp) {
    //   return done(null, false); // this will throw a 401
    // }
    try {
      const user = await User.findById(jwtPayload.id);
     if(user){
        done(null, user); // if there is no user, this will throw a 401
     }else{
        done(null,false)
     }
    } catch (error) {
      done(error);
    }
}
);


