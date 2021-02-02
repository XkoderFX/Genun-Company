import { Schema, Document, Types, model } from 'mongoose';

export interface OrderIn extends Document {
  name: string;
  email: string;
  location: string;
  date: Date;
  description: string;
  phone: string;
}

const OrderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

export default model<OrderIn>('Orders', OrderSchema);
