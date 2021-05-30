const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cakeshop', {
    useNewUrlParser: true, 
    useUnifiedTopology: true}).then(function(){
        console.log("connection successful.")
    }).catch(function(error){
        console.log("something went wrong",error)
    });
