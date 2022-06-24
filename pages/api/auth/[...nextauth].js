import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    // OAuth authentication providers
    Providers.Google({
      clientId:
        "1080512323-7akro7qrabirog170lf13domktumo9cu.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },

  // SQL or MongoDB database (or leave empty)
  database:
    "mongodb+srv://Rishy:N4BUh4CS2FDveVin@cluster0.sxw1v.mongodb.net/Authentication?retryWrites=true&w=majority",
});
