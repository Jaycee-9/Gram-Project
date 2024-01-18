import mongoose from "mongoose";

const connectToDb = async () =>
  await mongoose.connect(
    `mongodb+srv://${process.env.atlasUser}:${process.env.atlasPassword}@gram.ssekfhd.mongodb.net/?retryWrites=true&w=majority`
  );

export default connectToDb;
