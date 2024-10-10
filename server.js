const express = require("express");
const cors = require("cors");
const connectDB = require("./Config/db");
const errorHandler = require("./Middlewares/errorHandlerMiddleware");
const getUptime = require("./Config/uptime");
require("dotenv").config();

const port = process.env.PORT || 8080;
const app = express();

//allowed all remote to acces backend
app.use(
  cors({
    origin: "*",
  })
);

//for handling json body data from front-end
app.use(express.json());
//for handling json body urlencoded data from front-end
app.use(express.urlencoded({ extended: false }));

//database connection
connectDB();
const startTime = Date.now();

app.get("/", (req, res) => {
  res.send({
    msg: "server is working fine🚀🚀",
    app: "assignment_management",
    uptime: `${getUptime(startTime).toFixed(3)} sec`,
    api_doc: "https://documenter.getpostman.com/view/38681155/2sAXxQcrmK",
  });
});

//all the routes for serve
app.use("/", require("./Routes/authRoute"));
app.use("/", require("./Routes/assigmentRoute"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server running on port no ${port}`);
});
