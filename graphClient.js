// const graph = require('@microsoft/microsoft-graph-client');
// require('isomorphic-fetch');

// function getAuthenticatedClient(msalClient, userId) {
//   const client = graph.Client.init({
//     authProvider: async (done) => {
//       try {
//         const tokenResponse = await msalClient.acquireTokenSilent({
//           scopes: ['Calendars.Read'],
//           account: msalClient.getAccountByHomeId(userId)
//         });
//         done(null, tokenResponse.accessToken);
//       } catch (error) {
//         done(error, null);
//       }
//     }
//   });
//   return client;
// }

// module.exports = {
//   getAuthenticatedClient,
// };

const graph = require("@microsoft/microsoft-graph-client");
require("isomorphic-fetch");

// function getAuthenticatedClient(msalClient, userId) {
//   const client = graph.Client.init({
//     authProvider: async (done) => {
//       try {
//         // We nemen een simpele benadering door een token aan te vragen zonder de gebruiker op te halen via `getAccountByHomeId()`.
//         const tokenResponse = await msalClient.acquireTokenByClientCredential({
//           scopes: ["https://graph.microsoft.com/.default"],
//         });
//         done(null, tokenResponse.accessToken);
//       } catch (error) {
//         done(error, null);
//       }
//     },
//   });
//   return client;
// }

function getAuthenticatedClient(msalClient) {
  const client = require("@microsoft/microsoft-graph-client").Client.init({
    authProvider: async (done) => {
      try {
        const tokenResponse = await msalClient.acquireTokenByClientCredential({
          scopes: ["https://graph.microsoft.com/.default"],
        });
        done(null, tokenResponse.accessToken);
      } catch (error) {
        done(error, null);
      }
    },
  });
  return client;
}

module.exports = {
  getAuthenticatedClient,
};
