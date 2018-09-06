const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;

const UsersService = require('../users/service');

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

passport.use(
  new SpotifyStrategy(
    {
      clientID: SPOTIFY_CLIENT_ID,
      clientSecret: SPOTIFY_CLIENT_SECRET,
      callbackURL: '/auth/spotify/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      // Create user if not in db
      let user = await UsersService.findUser(profile.id);

      if (!user) {
        user = UsersService.createUser({
          name: profile.displayName,
          spotifyId: profile.id,
          accessToken,
          profilePicture: profile.photos[0],
          refreshToken
        });
      }

      done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await UsersService.findUserById(id);
  done(null, user);
});
