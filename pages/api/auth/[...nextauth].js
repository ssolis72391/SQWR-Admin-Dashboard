import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import axios from 'axios';

const refreshAccessToken = async prevToken => {
  const token = await refreshEndpoint(prevToken);

  // Do what you want

  return {
    accessToken: token.accessToken,
    accessTokenExpires: Date.now() + token.expiresIn * 1000,
  };
};

// const callbacks = {
//   async jwt(prevToken, token) {
//     // Initial call
//     if (token) {
//       return {
//         accessToken: token.accessToken,
//         // Assuming you can get the expired time from the API you are using
//         // If not you can set this value manually
//         accessTokenExpires: Date.now() + token.expiresIn * 1000,
//       };
//     }

//     // Subsequent calls
//     // Check if the expired time set has passed
//     if (Date.now() < prevToken.accessTokenExpires) {
//       // Return previous token if still valid
//       return prevToken;
//     }

//     // Refresh the token in case time has passed
//     return refreshAccessToken(prevToken);
//   },
// };

export default NextAuth({
  session: {
    jwt: true,
    maxAge: 7 * 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials, req, res) {
        const { email, password } = credentials;
        // Here call your API with data passed in the login form
        const response = await axios.put(
          'http://localhost:5000/api/admin/login',
          {
            email: 'admin@thesquareware.de',
            password: '123456',
          }
        );
        if (response) {
          const user = {
            apiToken: response.data.token,
            email: response.data.user.email,
            id: response.data.user._id,
            role: response.data.user.role,
          };
          // console.log(user);
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      // Initial call
      if (user) {
        return user;
      }

      // Subsequent calls
      return token;
    },
    async session(session, user) {
      console.log('here');
      console.log({ user, session });
      session.user = user;
      console.log({ session });
      return session;
    },
  },
});
