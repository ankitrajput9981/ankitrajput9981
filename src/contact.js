const express = require("express");
const mongoose = require("mongoose");
const contactSchema =  new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type:Number
    },
    message:{
        type: String
    }
});

const Contact = new mongoose.model("Contact",contactSchema);
module.exports = Contact;