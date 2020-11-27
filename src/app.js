const express = require("express");

const app = express();


app.listen(3030, function() {
    console.log("servidor funcionando")
});

app.get ("/", function (req,res){
    res.sendFile(__dirname + "/views/index.html")
    })

app.get('*', (req, res) => {
        res.sendFile(__dirname.replace("\src", "") + '/public/' + req.url);
      });