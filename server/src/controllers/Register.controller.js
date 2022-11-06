const express = require('express')
const { validationResult } = require("express-validator");
const {StatusCode,JWT_TOKEN} = require('../utils/constants');
const jsonGenerate = require("../utils/helpers");
const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')

const Register = (req,res)=>{
  const errors =  validationResult(req);
  if(errors.isEmpty()){
    const {username,password,email,name} = req.body;
    const salt =  bcrypt.genSalt(10)
    const hashPassword =  bcrypt.hash(password,salt)
    
    const userExist = User.findOne({$or:[{
      email:email
    },{username:req.body.username}]});

    if(userExist){
      return res.json(jsonGenerate(StatusCode.UNPROCESSED,
        "username or email already exists"))
    }

    try{
      const result = User.create({
        username:username,
        email:email,
        password:hashPassword,
        name:name
      })
      res.json(jsonGenerate(StatusCode.SUCESS,"Registraion Successfull",{userId:result._id,token:token},result))
    }catch(error){
      console.log(error)
    }
  }

  const token = jwt.sign({userId:result._id},JWT_TOKEN)
  res.json(jsonGenerate(StatusCode.VALIDATION_ERROR,"Validation error",errors.mapped()))
}
module.exports = Register;