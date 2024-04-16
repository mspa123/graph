// const express = require("express");
// const msalClient = require("./auth"); // Zorg dat deze overeenkomt met je MSAL configuratie
// const getCalendar = require("./getCalendar");

// const app = express();
// const port = 3000;

// // Middleware voor JSON body parsing
// app.use(express.json());

// // Route voor het ophalen van kalendergegevens
// app.get("/calendar", async (req, res) => {
//   // Hier zou je in een echte applicatie de gebruikers-ID dynamisch uit de sessie of een token halen
//   const userId = "80cb9897-e182-47fc-97c3-42ce42e99182"; // Vervang dit door de juiste gebruikers-ID

//   try {
//     const calendarData = await getCalendar(msalClient, userId);
//     res.json(calendarData);
//   } catch (error) {
//     res.status(500).send(error.toString());
//   }
// });

// // Welkomstpagina of hoofdroute
// app.get("/", (req, res) => {
//   res.send("Welkom bij mijn Microsoft Graph API App");
// });

// // Start de server
// app.listen(port, () => {
//   console.log(`Server draait op http://localhost:${port}`);
// });

const express = require("express");
const msalClient = require("./auth");
const getCalendar = require("./getCalendar");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/calendar", async (req, res) => {
  try {
    const calendarData = await getCalendar(msalClient);
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
