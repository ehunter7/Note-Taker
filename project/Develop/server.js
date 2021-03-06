const express = require("express");
const app = express();
// const apiRoutes = require("./routes/apiroutes");
// const htmlRoutes = require("./routes/htmlroutes");

const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/htmlroutes")(app);
require("./routes/apiroutes")(app);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
