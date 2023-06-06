import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

const connectDatabase = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
    return mongoose;
};

export default connectDatabase;
