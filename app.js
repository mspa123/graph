const express = require("express");
const msalClient = require("./auth");
const getCalendar = require("./getCalendar");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json());

app.get("/calendar", async (req, res) => {
  try {
    // Zorg ervoor dat je een geldige userId gebruikt
    const userId = process.env.OBJECT_ID; // Zorg dat deze variabele correct is ingesteld in je .env bestand
    const calendarData = await getCalendar(msalClient, userId);
    res.json(calendarData);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.get("/", (req, res) => {
  res.send("Welkom bij mijn Microsoft Graph API App");
});

app.listen(port, () => {
  console.log(`Server draait op http://localhost:${port}`);
});
