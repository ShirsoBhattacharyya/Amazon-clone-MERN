import express from 'express';
import User from '../models/user.model';
const router=express.Router();
router.get('/user',(req,res)=>{
    res.send('I am a user');
})
router.post('/newuser',(req,res)=>{
    const user=req.body;
    res.status(200).send(user);
})
export default router;