import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`conncted db on ${connect.connection.host}`);
    }
    catch (err) {
        console.log(err.message);
        process.exit(1);
    }
    
};

export default connectDB;