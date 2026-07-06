const express = require("express");

const {
    createRoom,
    getAllRooms,
    getRoomById,
    updateRoom,
    deleteRoom,
    updateRoomStatus,
    searchAvailableRooms
} = require("../controller/roomController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const validateRoom = require("../middleware/validateRoom");

const router = express.Router();

/* =========================================
    PUBLIC ROUTES
========================================= */

// Get All Rooms
router.get("/", getAllRooms);

// Search Available Rooms
router.get("/available", searchAvailableRooms);

// Get Room By ID
router.get("/:id", getRoomById);

/* =========================================
    ADMIN ROUTES
========================================= */

// Create Room
router.post(
    "/",
    authMiddleware,
    adminMiddleware,
    validateRoom,
    createRoom
);

// Update Room
router.put(
    "/:id",
    authMiddleware,
    adminMiddleware,
    validateRoom,
    updateRoom
);

// Update Room Status
router.patch(
    "/:id/status",
    authMiddleware,
    adminMiddleware,
    updateRoomStatus
);

// Delete Room
router.delete(
    "/:id",
    authMiddleware,
    adminMiddleware,
    deleteRoom
);

module.exports = router;