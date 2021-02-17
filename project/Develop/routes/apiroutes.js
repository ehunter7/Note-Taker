const path = require(`path`);
const fs = require(`fs`);

// const { Router } = require("express");
module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    const rawData = fs.readFileSync(
      "C:projectsHomeworkNote-TakerprojectDevelopdbdb.json"
    );
    const data = JSON.parse(rawData);
    console.log(data);
    return data;
  });
};
