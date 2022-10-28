import  express,{Application,Request,Response}  from "express";
import connect from "./components/config/database";
import userRoutes from './components/features/routes/user.routes';
import authRoutes from './components/features/routes/auth.routes';
import productRoutes from './components/features/routes/product.routes';
import cartRoutes from './components/features/routes/cart.routes';
import orderRoutes from './components/features/routes/order.routes';
const server:Application=express();
const PORT=process.env.PORT||8080;
//Middlewares
server.use(express.json());
server.use('/api/users',userRoutes);
server.use('/api/auth',authRoutes);
server.use('/api/products',productRoutes);
server.use('/api/carts',cartRoutes);
server.use('/api/orders',orderRoutes);

server.get('/api/',(req:Request,res:Response)=>{
    res.send('Welcome to Tweek Ecommerce Api.')
})
server.listen(PORT,async()=>{
    await connect();
    console.log(`Server started on http://localhost:${PORT}`);
})