const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    if (!user || !user.id) {
        throw new Error("User information is required to generate a token.");
    }

    return jwt.sign(
        {
            id: user.id,
            role: user.role,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN || "7d",
            issuer: "student-room-booking-api",
            audience: "student-room-booking-client",
        }
    );
};

module.exports = generateToken;