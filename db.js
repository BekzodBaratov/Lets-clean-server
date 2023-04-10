const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(`DB error: ${err}`));
};
