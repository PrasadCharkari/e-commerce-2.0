import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  images: string[];
  thumbnail: string;
  fastDelivery: boolean;
}

const productSchema: Schema<IProduct> = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  images: { type: [String], required: true },
  thumbnail: { type: String, required: true },
  fastDelivery: { type: Boolean, required: true },
});

export default mongoose.models.Product ||
  mongoose.model<IProduct>("Product", productSchema);
