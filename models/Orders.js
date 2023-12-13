import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    creationDate: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    customer: {
      type: String,
      required: true,
    },
    completeTime: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", OrderSchema);
