const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  const dates = new Date();
  const result = addDays(
    new Date(dates.getFullYear(), dates.getMonth(), dates.getDate()),
    100
  );

  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

module.exports = app;

app.listen(3000);
