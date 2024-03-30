import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// const mongouri ="mongodb+srv://dbashir84:65iQuZc35Re0EvgV@cluster0.rzuo3sm.mongodb.net/chat-app?retryWrites=true&w=majority&appName=Cluster0"
const mongouri = process.env.MONGO_DB_URI;
console.log(process.env.PORT)

const connectToMongoDB = async ()=>{
    try{
        await mongoose.connect(mongouri );
        console.log("Connected to mongoDB");
    }
    catch(error){
        console.log("Error connecting to mongo db",error.message);
    }
}

export default connectToMongoDB;