const supabase = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* =========================================
   Generate JWT
========================================= */
const generateToken = (id, role) => {
    return jwt.sign(
        { id, role },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d",
        }
    );
};

/* =========================================
   Register User
========================================= */
const registerUser = async (req, res, next) => {
    try {
        const {
            full_name,
            email,
            password,
            phone,
            student_id,
            role,
        } = req.body;

        if (!full_name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Full name, email and password are required.",
            });
        }

        // Check if email already exists
        const { data: existingUser, error: existingError } = await supabase
            .from("users")
            .select("id")
            .eq("email", email)
            .maybeSingle();

        if (existingError) {
            throw existingError;
        }

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Email already exists.",
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const { data: newUser, error } = await supabase
            .from("users")
            .insert([
                {
                    full_name,
                    email,
                    password: hashedPassword,
                    phone,
                    student_id,
                    role: role || "student",
                },
            ])
            .select("id, full_name, email, role")
            .single();

        if (error) throw error;

        const token = generateToken(newUser.id, newUser.role);

        return res.status(201).json({
            success: true,
            message: "User registered successfully.",
            token,
            user: newUser,
        });

    } catch (error) {
        next(error);
    }
};

/* =========================================
   Login User
========================================= */
const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required.",
            });
        }

        const { data: user, error } = await supabase
            .from("users")
            .select("*")
            .eq("email", email)
            .maybeSingle();

        if (error) throw error;

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password.",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password.",
            });
        }

        const token = generateToken(user.id, user.role);

        return res.status(200).json({
            success: true,
            message: "Login successful.",
            token,
            user: {
                id: user.id,
                full_name: user.full_name,
                email: user.email,
                role: user.role,
            },
        });

    } catch (error) {
        next(error);
    }
};

/* =========================================
   Get Logged In User
========================================= */
const getProfile = async (req, res, next) => {
    try {
        const { data: user, error } = await supabase
            .from("users")
            .select("id, full_name, email, phone, student_id, role, created_at")
            .eq("id", req.user.id)
            .single();

        if (error) throw error;

        return res.status(200).json({
            success: true,
            user,
        });

    } catch (error) {
        next(error);
    }
};

/* =========================================
   Get All Users
========================================= */
const getAllUsers = async (req, res, next) => {
    try {
        const { data: users, error } = await supabase
            .from("users")
            .select("id, full_name, email, phone, student_id, role, created_at")
            .order("created_at", { ascending: false });

        if (error) throw error;

        return res.status(200).json({
            success: true,
            total: users.length,
            users,
        });

    } catch (error) {
        next(error);
    }
};

/* =========================================
   Delete User
========================================= */
const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        const { error } = await supabase
            .from("users")
            .delete()
            .eq("id", id);

        if (error) throw error;

        return res.status(200).json({
            success: true,
            message: "User deleted successfully.",
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    registerUser,
    loginUser,
    getProfile,
    getAllUsers,
    deleteUser,
};