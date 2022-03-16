const express = require("express");
const app = express();
// console.log(app)

app.get("/books", function (req, res) {
    return res.send({routes: ["let us C","Organizer","Sunil Gangopadhayay","Apur Songsar"]});
})

app.listen(6001,() => {
    console.log("listening on server")
})

