import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

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
        console.log(email, password);
        return { email, password };
      },
    }),
  ],
});
