const express = require("express");

const router = express.Router();

// Controllers
const {
    registerUser,
    loginUser,
    getProfile,
    getAllUsers,
    deleteUser,
} = require("../controller/authController");

// Middleware
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

/* =====================================================
    PUBLIC ROUTES
===================================================== */

// Register User
router.post("/register", registerUser);

// Login User
router.post("/login", loginUser);

/* =====================================================
    PROTECTED ROUTES
===================================================== */

// Logged-in User Profile
router.get("/profile", authMiddleware, getProfile);

/* =====================================================
    ADMIN ROUTES
===================================================== */

// Get All Users
router.get(
    "/",
    authMiddleware,
    adminMiddleware,
    getAllUsers
);

// Delete User
router.delete(
    "/:id",
    authMiddleware,
    adminMiddleware,
    deleteUser
);

module.exports = router;