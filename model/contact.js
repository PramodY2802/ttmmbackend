// models/Contact.js
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

  


const ContactModel = mongoose.model('Contact', contactSchema);

export {ContactModel as Contact}
