const express = require("express");
const user=require("../controllers/userReg.js");
const router = express.Router();

const {registerUser} =require( '../controllers/userReg.js');
const protect=require("../middleware/auth.js")
router.post('/register',registerUser);

module.exports=router;