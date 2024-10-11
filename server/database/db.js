import mongoose from 'mongoose'
const DBConnection= async ()=>{
    const MONGODB_URI='mongodb+srv://sohailasuf123:sohailasuf123@mern.tysz1l6.mongodb.net/'
    try {
        await mongoose.connect(MONGODB_URI,{ useNewUrlParser:true})
        console.log("db connect");

        
    } catch (error) {
        console.log(error.message);
        
    }

}
export default DBConnection