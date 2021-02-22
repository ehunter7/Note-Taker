const path = require(`path`);
const fs = require(`fs`);
const uuid = require("uuid");

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    console.log("we made it this far");
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
      if (err) console.log(err);
      res.send(JSON.parse(data));
    });
  });

  app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    newNote.id = uuid.v4();
    fs.readFile(path.join(__dirname, "../db/db.json"), (err, res) => {
      if (err) throw err;
      const fileJSON = JSON.parse(data);
      fileJSON.push(newNote);
      fs.writeFile(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(fileJSON),
        (err) => {
          if (err) throw err;
          res.status(200).send(true);
        }
      );
    });
  });

  app.delete("/api/notes/:id", (req, res) => {
    const currentID = req.params.id;
    fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
      if (err) throw err;
      const fileJSON = JSON.parse(data);
      for (let i = 0; i < fileJSON.length; i++) {
        if (currentID === fileJSON[i].id) {
          fileJSON.splice(i, 1);
        }
      }
      fs.writeFile(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(fileJSON),
        (err) => {
          if (err) throw err;
          res.status(200).send(true);
        }
      );
    });
  });
};
