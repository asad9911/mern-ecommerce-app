import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });


const connectDatabase = async () => {
  mongoose.set("strictQuery", false);
  const uri = process.env.DB_URI;
  await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
    return mongoose;
};

export default connectDatabase;
