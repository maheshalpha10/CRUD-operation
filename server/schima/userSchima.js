import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true }, // Name is required and trimmed
    username: { type: String, required: true, unique: true, trim: true }, // Username is unique and trimmed
    email: { type: String, required: true, unique: true, lowercase: true, trim: true }, // Email is lowercase and unique
    phone: { type: String, required: true, unique: true, trim: true }, // Phone is unique and trimmed
    createdAt: { type: Date, default: Date.now }, // Auto-set the creation date
});

const User = mongoose.model("User", userSchema);

export default User;
