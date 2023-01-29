import mongoose, { Schema } from "mongoose";

const CardSchema = new Schema({
  cardNumber: {
    type: Number,
  },
  expires: {
    type: String,
  },
  cvv: {
    type: Number,
  },
  isVirtual: {
    type: Boolean,
  },
  options: {
    blocked: Boolean,
    contactless: Boolean,
    international: Boolean,
  },
});

export default mongoose.model("Card", CardSchema);
