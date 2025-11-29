import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';

class userController {
    static async register(req, res) {
        try {
            const { username, email, password } = req.body;
            
            // Check if user already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: "User already exists" });
            }

            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);
            
            // Create new user
            const user = new User({ 
                username, 
                email, 
                password: hashedPassword 
            });
            await user.save();
            
            res.status(201).json({ 
                message: "User registered successfully", 
                user: { username, email } 
            });
        } catch (error) {
            res.status(500).json({ message: "Server error", error: error.message });
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body;
            
            // Find user by email
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(401).json({ message: "Invalid credentials" });
            }

            // Check password
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: "Invalid credentials" });
            }

            // Store user ID in session
            req.session.userId = user._id;
            req.session.username = user.username;
            req.session.email = user.email;
            
            res.status(200).json({ 
                message: "User logged in successfully", 
                user: { 
                    id: user._id, 
                    username: user.username, 
                    email: user.email 
                } 
            });
        } catch (error) {
            res.status(500).json({ message: "Server error", error: error.message });
        }
    }

    static async profile(req, res) {
        try {
            if (!req.session.userId) {
                return res.status(401).json({ message: "Please log in" });
            }

            // Get user data from database
            const user = await User.findById(req.session.userId).select('-password');
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            res.status(200).json({ 
                message: "User profile data", 
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email
                }
            });
        } catch (error) {
            res.status(500).json({ message: "Server error", error: error.message });
        }
    }

    static logout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ message: "Could not log out" });
            }
            res.clearCookie('connect.sid');
            res.json({ message: "Logged out successfully" });
        });
    }
}

export default userController;