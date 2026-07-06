const express = require("express");

const router = express.Router();

const bookingController = require("../controller/bookingController");

const auth = require("../middleware/authMiddleware");

/* Create Booking */

router.post(
    "/",
    auth,
    bookingController.createBooking
);

/* My Bookings */

router.get(
    "/my-bookings",
    auth,
    bookingController.getMyBookings
);

/* Booking Details */

router.get(
    "/:id",
    auth,
    bookingController.getBookingById
);

/* Cancel Booking */

router.patch(
    "/:id/cancel",
    auth,
    bookingController.cancelBooking
);

/* Update Status */

router.patch(
    "/:id/status",
    auth,
    bookingController.updateBookingStatus
);

module.exports = router;