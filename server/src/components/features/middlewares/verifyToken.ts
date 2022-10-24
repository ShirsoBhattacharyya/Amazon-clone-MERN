import jwt from "jsonwebtoken";

const verifyToken=(req:any,res:any,next:any)=>{
    const authHeader:any=req.headers.token;
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token,`${process.env.JWT_SECRET}`,(error: any,user: any)=>{
            if(error) return res.status(403).json('Invalid token!');
            req.user=user;
            next();
        })
    }else{
        return res.status(401).json('You are not authenticated!');
    }
}
export default verifyToken;