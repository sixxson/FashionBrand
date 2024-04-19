import mongoose from "mongoose";

async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGODB_URL!)
    }catch (error) {
        throw new Error('Connection failed!')
    }
}

export default dbConnect