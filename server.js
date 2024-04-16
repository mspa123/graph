require("dotenv").config();

const express = require("express");
const msalClient = require("./auth");
const getCalendar = require("./getCalendar");

const app = express();
const port = 3000;

app.get("/calendar", async (req, res) => {
  // Haal de gebruikers-ID uit de environment variabelen
  const userId = process.env.OBJECT_ID;

  try {
    if (!userId) {
      throw new Error("Geen gebruikers-ID geconfigureerd.");
    }

    const calendarData = await getCalendar(msalClient, userId);
    res.json(calendarData);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
