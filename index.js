const express = require("express");
const app = express();

app.use(
    express.static(__dirname + "/public")
);

app.use("/index.html", function(req, res) {
    res.status(200);
    res.type("text/html");
});

port = 3000; // default port
if (process.argv[2]) {
    port = +process.argv[2];
}

app.listen(
    port,
    function() {
        console.log("application started on port %d", port);
    }
);