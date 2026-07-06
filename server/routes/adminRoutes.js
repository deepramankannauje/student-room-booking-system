const express = require("express");

const router = express.Router();

const adminController = require("../controller/adminController");

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

/* =========================================
   Booking Management
========================================= */

router.patch(
    "/bookings/:id/status",
    auth,
    admin,
    adminController.updateBookingStatus
);

/* =========================================
   Room Management
========================================= */

router.post(
    "/rooms",
    auth,
    admin,
    adminController.createRoom
);

router.get(
    "/bookings",
    auth,
    admin,
    adminController.getAllBookings
);

module.exports = router;