const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username:{
    type:String,
    min:6,
    max:32
  },
  password:{
    type:String,
    min:6,
    max:32,
    required:true
  },
  email:{
    type:String,
    min:6,
    max:32,
    required:true
  },
  date:{
    type:Date,
    default:Date.now,
  },
  name:{
    type:String,
    min:6,
    max:32
  }
})

module.exports = mongoose.model("User",userSchema);