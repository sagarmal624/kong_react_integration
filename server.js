/* eslint-disable no-console */
const express = require("express");
const { join } = require("path");
const morgan = require("morgan");
const cors = require('cors');
const app = express();

const port = process.env.SERVER_PORT || 3000;
// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true
// }));
app.use(morgan("dev"));
app.use(express.static(join(__dirname, "build")));

app.use((_, res) => {
  res.sendFile(join(__dirname, "build", "index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
