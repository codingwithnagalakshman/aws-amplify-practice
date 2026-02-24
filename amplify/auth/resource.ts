import { defineAuth, secret } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      facebook: {
        clientId: secret("facebookAppClientId"),
        clientSecret: secret("facebookAppClientSecret"),
        scopes: ["email", "public_profile"],
        attributeMapping: {
          email: "email",
          givenName: "first_name",
          familyName: "last_name",
        },
      },
      google: {
        clientId: secret("googleAppClientId"),
        clientSecret: secret("googleAppClientSecret"),
        scopes: ["email", "profile"],
        attributeMapping: {
          email: "email",
          givenName: "given_name",
          familyName: "family_name",
        },
      },
      callbackUrls: ["http://localhost:5173/"],
      logoutUrls: ["http://localhost:5173/"],
    },
  },
  userAttributes: {
    email: {
      mutable: true,
      required: true,
    },
    givenName: {
      mutable: true,
      required: true,
    },
    familyName: {
      mutable: true,
      required: true,
    },
    "custom:is_beta_user": {
      dataType: "Boolean",
      mutable: true,
    },
  },
});
