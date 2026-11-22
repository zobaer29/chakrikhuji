import { betterAuth } from "better-auth";
import { APIError } from "better-auth/api";
import { ACCOUNT_TYPES } from "@/lib/roles";
import { sendVerificationEmail } from "@/lib/email";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGOURL);
const db = client.db("chakrikhuji");

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),

  // MongoDB collection names
  user: {
    modelName: "users",
    additionalFields: {
      accountType: {
        type: ACCOUNT_TYPES,
        required: false,
        defaultValue: "job-seeker",
      },
      companyName: { type: "string", required: false },
    },
  },
  session: { modelName: "sessions" },
  account: { modelName: "accounts" },
  verification: { modelName: "verifications" },

  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          const accountType = user.accountType ?? "job-seeker";
          const companyName = typeof user.companyName === "string" ? user.companyName.trim() : "";
          if (!ACCOUNT_TYPES.includes(accountType)) {
            throw new APIError("BAD_REQUEST", { message: "Invalid account type." });
          }
          if (accountType === "company" && !companyName) {
            throw new APIError("BAD_REQUEST", { message: "Company name is required." });
          }
          return { data: { ...user, accountType, companyName: accountType === "company" ? companyName : "" } };
        },
      },
      update: {
        before: async (user) => {
          // A profile update must never change the account's access role.
          if (Object.hasOwn(user, "accountType")) {
            throw new APIError("BAD_REQUEST", { message: "Account type cannot be changed." });
          }
        },
      },
    },
  },

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },

  emailVerification: {
    sendOnSignUp: true,
    sendOnSignIn: true,
    expiresIn: 3600,
    sendVerificationEmail,
  },
});