import express from 'express';
import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import CryptoJS from 'crypto-js';
import * as dotenv from 'dotenv';
dotenv.config();
const router=express.Router();
//REGISTER
const secretPassword=process.env.PASS_SECRET;
router.post('/register',async(req,res)=>{
    const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password,`${secretPassword}`).toString()
    })
    try {
        const savedUser=await newUser.save();
        res.status(201).json(savedUser);
        
    } catch (error) {
        res.status(500).json(error);
    }
})
//LOGIN
const jwtSecretKey=process.env.JWT_SECRET;
router.post('/login',async(req,res)=>{
    try {
        const user:any=await User.findOne({username:req.body.username});
        !user && res.status(401).json("Invalid Username");
        const hashedPassword=CryptoJS.AES.decrypt(user.password,`${secretPassword}`);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        const inputPassword = req.body.password;        
        originalPassword !== inputPassword && res.status(401).json("Incorrect Password");
        const accessToken = jwt.sign({id: user._id,isAdmin: user.isAdmin,},`${jwtSecretKey}`,{expiresIn:"3d"});
        const { password, ...others } = user._doc;  
        res.status(200).json({...others, accessToken});
    } catch (error) {
        res.status(500).json(error);
    }
})
export default router;