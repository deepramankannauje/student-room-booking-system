const jwt = require("jsonwebtoken");
const supabase = require("../config/db");

const authMiddleware = async (req, res, next) => {
    try {
        // Get Authorization Header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Access denied. No token provided."
            });
        }

        // Extract Token
        const token = authHeader.split(" ")[1];

        // Verify Token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Get User From Database
        const { data: user, error } = await supabase
            .from("users")
            .select("id, full_name, email, role")
            .eq("id", decoded.id)
            .single();

        if (error || !user) {
            return res.status(401).json({
                success: false,
                message: "User not found."
            });
        }

        // Attach User to Request
        req.user = user;

        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token."
        });
    }
};

module.exports = authMiddleware;