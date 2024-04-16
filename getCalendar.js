require("dotenv").config();

// Controleer of de benodigde environment variabelen aanwezig zijn
if (!process.env.CLIENT_ID) {
  throw new Error("CLIENT_ID is niet gedefinieerd in .env bestand");
}
if (!process.env.CLIENT_SECRET) {
  throw new Error("CLIENT_SECRET is niet gedefinieerd in .env bestand");
}
if (!process.env.OBJECT_ID) {
  throw new Error("OBJECT_ID is niet gedefinieerd in .env bestand");
}

const Id = process.env.OBJECT_ID;

const { getAuthenticatedClient } = require("./graphClient");

async function getCalendar(msalClient, userId) {
  const client = getAuthenticatedClient(msalClient, userId);
  const events = await client.api(`/users/${Id}/calendar/events`).get();
  return events.value;
}

module.exports = getCalendar;
