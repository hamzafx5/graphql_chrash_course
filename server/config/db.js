import mongoose from "mongoose";

async function connectDB() {
    const res = await mongoose.connect(process.env.MONGO_DB_URI);
    const isDev = process.env.NODE_ENV === "development";
    isDev &&
        console.log(
            `Database is connected ${res.connection.host}`.cyan.underline.bold
        );
}

export default connectDB;
