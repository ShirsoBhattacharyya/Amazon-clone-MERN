import express from 'express';
const router=express.Router();
const stripe=require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);

router.post('/payment',(req,res)=>{
    stripe.charges.create({
        source:req.body.tokenId,
        amount:req.body.amount,
        currency:"inr"
    },(stripeError:any,stripeResponse:any)=>{
        if(stripeError){
            res.status(500).json(stripeError);
        }else{
            res.status(200).json(stripeResponse)
        }
    })
})

export default router;