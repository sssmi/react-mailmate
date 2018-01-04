const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google', // when aomeone visits this route, they will be redirected to authentication flow
    passport.authenticate('google', {
      scope: ['profile', 'email'], // The scope specifies what we can access in users profile
    }),
  );

  app.get('/auth/google/callback', passport.authenticate('google'));
};