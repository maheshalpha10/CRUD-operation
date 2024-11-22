import User from "../schema/userSchema.js";

// Function to add a new user
export const addUser = async (req, res) => {
  const user = req.body; // Capture user data from the request body
  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

