const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   email:{
    type:String,
    require:true,
    unique:true,
    max:50
   },
   likedMovies:{
    type:Array,
   }
})
module.exports= mongoose.model("userModal", userSchema)