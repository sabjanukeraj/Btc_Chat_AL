const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Server läuft erfolgreich!");
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
