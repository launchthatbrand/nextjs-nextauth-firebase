import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { db, app } from "../../../firebase";
//import * as firestoreFunctions from "firebase/firestore";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  adapter: FirestoreAdapter(db),
};
export default NextAuth(authOptions);
