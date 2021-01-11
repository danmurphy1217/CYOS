const express = require("express");
// middleware
const cors = require("cors"); // strict cors enforcement
const morgan = require("morgan"); // logging
const helmet = require("helmet"); // security
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;
const corsConfig = {
  origin: ["http://localhost:5000"],
  methods: ["GET", "POST"],
};

app.use(morgan("common"));
app.use(cors(corsConfig));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function () {
  console.log(`Started Server on port ${PORT}`);
});

require("./routes/test")(app);
require("./routes/auth")(app);
