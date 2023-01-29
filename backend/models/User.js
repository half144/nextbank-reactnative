import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      unique: true,
    },
    ammount: {
      type: Number,
      default: 0,
    },
    cpf: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    pix: {
      type: [String],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      select: false,
    },
    password: {
      type: String,
      required: true,
    },
    creditCards: {
      type: [Object],
    },
    pass4Digits: {
      required: true,
      type: Number,
    },
    extract: {
      type: [Object],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
