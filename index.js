require("express-async-errors");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const priceList = require("./routes/pricelist.route");

require("./db")();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/v1/prices", priceList);
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

const port = process.env.PORT || 3000;
app.listen(port, console.log("server listening on port " + port));
