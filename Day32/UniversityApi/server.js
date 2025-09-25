let app = require("./src/app");
const mongoose = require("mongoose");

const dotenv = require("dotenv").config({
  path: "./src/.env",
});

let PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_PC)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
