const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

var port = Number(process.env.PORT || 8000);

app.use("/", express.static(path.join(__dirname, "public")));
app.use('/', require('./api').route)

var server = app.listen(port, () => {
    console.log("Server is running at http://localhost:port %d", server.address().port);
});
