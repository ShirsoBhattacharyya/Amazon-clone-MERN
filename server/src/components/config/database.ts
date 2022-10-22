import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const URL=process.env.MONGO_URL;
const connect=()=>{
    mongoose.connect(`${URL}`)
}
export default connect;