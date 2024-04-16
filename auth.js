require("dotenv").config();

const clientID = process.env.CLIENT_ID;
const Secret = process.env.CLIENT_SECRET;

const msal = require("@azure/msal-node");

const msalConfig = {
  auth: {
    clientId: process.env.CLIENT_ID, // Moet overeenkomen met Application (client) ID in Azure AD
    authority: `https://login.microsoftonline.com/${process.env.TENANT_ID}`, // Moet je specifieke Tenant ID zijn
    clientSecret: process.env.CLIENT_SECRET, // Moet een geldig client geheim zijn
  },
};

const pca = new msal.ConfidentialClientApplication(msalConfig);

module.exports = pca;
