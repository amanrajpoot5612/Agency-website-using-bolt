import mongoose, { Schema } from 'mongoose';

const leadSchema = new Schema({
  name: { type: String, required: true, trim: true, maxlength: 300 },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: 300 },
  phone: { type: String, trim: true, maxlength: 300, default: '' },
  projectType: { type: String, trim: true, maxlength: 300, default: '' },
  budget: { type: String, trim: true, maxlength: 300, default: '' },
  timeline: { type: String, trim: true, maxlength: 300, default: '' },
  message: { type: String, required: true, trim: true, maxlength: 5_000 },
  notificationStatus: {
    type: String,
    enum: ['pending', 'sent', 'failed'],
    default: 'pending',
    index: true,
  },
  notificationId: { type: String, default: '' },
  notificationError: { type: String, default: '' },
}, { timestamps: true });

export const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);
