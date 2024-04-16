require("dotenv").config();

const clientID = process.env.CLIENT_ID;
const Secret = process.env.CLIENT_SECRET;

const msal = require("@azure/msal-node");

const msalConfig = {
  auth: {
    clientId: clientID,
    authority:
      "https://login.microsoftonline.com/87c50b58-2ef2-423d-a4db-1fa7c84efcfa",
    clientSecret: Secret,
  },
};

const pca = new msal.ConfidentialClientApplication(msalConfig);

module.exports = pca;
