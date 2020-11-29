var express = require ("express");

var app= express();

app.listen(3030,() => console.log(`Server running in ${3030} port`));


app.get  ("/", function (req,res){
    res.sendFile(__dirname + "/views/index.html")
})

app.get  ("/register", function (req,res){
    res.sendFile(__dirname + "/views/register.html")
})
app.get  ("/login", function (req,res){
    res.sendFile(__dirname + "/views/login.html")
})

app.get('*', (req, res) => {
        res.sendFile(__dirname.replace("\src", "") + '/public/' + req.url);
      });