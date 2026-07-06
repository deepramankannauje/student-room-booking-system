const bookingService = require("../services/bookingService");
const roomService = require("../services/roomService");

/* =========================================
   Get All Bookings
========================================= */

const getAllBookings = async (req, res, next) => {
    try {

        const bookings = await bookingService.getAllBookings();

        return res.status(200).json({
            success: true,
            total: bookings.length,
            bookings,
        });

    } catch (error) {
        next(error);
    }
};

/* =========================================
   Update Booking Status
========================================= */

const updateBookingStatus = async (req, res, next) => {
    try {

        const { status, rejection_reason } = req.body;

        const booking = await bookingService.updateBookingStatus(
            req.params.id,
            status,
            req.user.id,
            rejection_reason
        );

        return res.status(200).json({
            success: true,
            message: `Booking ${status} successfully.`,
            booking,
        });

    } catch (error) {
        next(error);
    }
};

/* =========================================
   Create Room
========================================= */

const createRoom = async (req, res, next) => {
    try {

        const room = await roomService.createRoom(req.body);

        return res.status(201).json({
            success: true,
            message: "Room created successfully.",
            room,
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllBookings,
    updateBookingStatus,
    createRoom,
};