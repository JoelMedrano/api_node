const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = 3000;

app.listen(port, () => {
    console.log("🚀 ~ file: app.js ~ line 10 ~ app.listen ~ port", port);
});
