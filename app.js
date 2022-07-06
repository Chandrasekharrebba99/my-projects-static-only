const express = require("express");
const path = require('path');
const app = express();

app.use(express.static(__dirname +'/public'));

app.get("/",function(req,res){
  res.sendfile(path.join(__dirname+'/index.html'));

});




app.get('/', function(req, res){
  res.send('sectionFavouritePlaces' + req.query.id);
});

app.listen(3000,function(){
  console.log("server is up and running 3000");
})
