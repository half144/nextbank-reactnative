import mongoose from "mongoose";

const connectMongoDb = async () => {
  try {
    mongoose.connect(
      `mongodb+srv://half144:${process.env.MONGO_PASS}@cluster0.vsua6fq.mongodb.net/?retryWrites=true&w=majority`,
      { autoIndex: false }
    );
    console.log("connected a mongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDb;
