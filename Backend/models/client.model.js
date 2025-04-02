import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

// Define the address schema
const addressSchema = new mongoose.Schema({
  line1: { type: String, required: true },
  line2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  // zip: { type: String, required: true },
  // country: { type: String, required: true }
});

// Define the client schema
const clientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true, unique: true },
    email: { type: String, unique: true },
    address: { type: addressSchema, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// Add text index for fast search
clientSchema.index({ name: "text", email: "text", "address.city": "text" });

// Add pagination plugin
clientSchema.plugin(mongoosePaginate);

const Client = mongoose.model("Client", clientSchema);

export default Client;
