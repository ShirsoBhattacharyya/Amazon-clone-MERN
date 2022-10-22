import  express,{Application,Request,Response}  from "express";
import connect from "./components/config/database";
import userRoutes from './components/features/routes/user.routes';
import authRoutes from './components/features/routes/auth.routes';
const server:Application=express();
const PORT=process.env.PORT||8080;
//Middlewares
server.use(express.json());
server.use('/api/users',userRoutes);
server.use('/api/auth',authRoutes);
server.get('/api/',(req:Request,res:Response)=>{
    res.send('Welcome to Eldorado Api.')
})
server.listen(PORT,async()=>{
    await connect();
    console.log(`Server started on http://localhost:${PORT}`);
})