import mongoose from "mongoose";


const connection=async()=>{
    const URL=`mongodb://localhost:27017`;
    try {
       await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
       console.log("dataBase connected successfully");
        
    } catch (error) {
        console.log("error while connecting with database",error);
    }

}
export default connection;