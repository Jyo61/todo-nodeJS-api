var mongoose = require('mongoose')
const crypto = require('crypto')
const uuidv1 = require('uuid/v1')

var userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
        maxlength : 32,
        trim : true 
    },
    lastName:{
        type : String,
        maxlength : 32,
        trim : true
     },
     email:{
         type : String,
         required : true,
         trim : true,
         unique : true
        },
        encry_password:{
            type : String,
            trim : true
        },
        salt: String
  });

  module.exports = mongoose.model("User",userSchema)

  userSchema.virtual("password")
  .set(function(password){
     this._password = password
         this.salt = uuidv1();
          this.encry_password = this.securePassword(password);


     })
     .get( function(){
         return this._password;
      })
  
  
  userSchema.method()={
     securePassword : function(plainPassword){
          if(!password) return ""
          try{
              return crypto
              .createHmac('sha256', this.salt)
              .update('plainPassword')
              .digest('hex');

     }catch(err){

          }

      }
  }