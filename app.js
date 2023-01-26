const express = require("express");
const bodyPraser = require("body-parser");
const router = require("./routes");

const app = express();

const PORT = 8080;

const cors = require("cors");

app.use(cors({ origin: "*" }));

app.use(bodyPraser.json());
app.use(bodyPraser.urlencoded({ extended: true }));
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
