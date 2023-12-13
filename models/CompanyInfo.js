import mongoose from "mongoose";

const CompanyInfoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    establishedYear: {
      type: Number,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    employees: {
      type: Number,
      required: true,
    },
    revenue: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("CompanyInfo", CompanyInfoSchema);
