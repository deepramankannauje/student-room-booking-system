const bookingService = require("../services/bookingService");

/* =========================================
   Create Booking
========================================= */

const createBooking = async (req, res, next) => {

    try {

        const booking = await bookingService.createBooking({

            ...req.body,

            user_id: req.user.id,

        });

        return res.status(201).json({

            success: true,
            message: "Booking created successfully.",
            booking,

        });

    } catch (error) {

        next(error);

    }

};

/* =========================================
   Get My Bookings
========================================= */

const getMyBookings = async (req, res, next) => {

    try {

        const bookings = await bookingService.getUserBookings(
            req.user.id
        );

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
   Get Booking By ID
========================================= */

const getBookingById = async (req, res, next) => {

    try {

        const booking = await bookingService.getBookingById(
            req.params.id
        );

        if (!booking) {

            return res.status(404).json({

                success: false,
                message: "Booking not found.",

            });

        }

        return res.status(200).json({

            success: true,
            booking,

        });

    } catch (error) {

        next(error);

    }

};

/* =========================================
   Cancel Booking
========================================= */

const cancelBooking = async (req, res, next) => {

    try {

        const booking = await bookingService.cancelBooking(

            req.params.id,

            req.user.id

        );

        return res.status(200).json({

            success: true,
            message: "Booking cancelled successfully.",
            booking,

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

        const booking = await bookingService.updateBookingStatus(

            req.params.id,

            req.body.status

        );

        return res.status(200).json({

            success: true,
            message: "Booking status updated successfully.",
            booking,

        });

    } catch (error) {

        next(error);

    }

};

module.exports = {

    createBooking,

    getMyBookings,

    getBookingById,

    cancelBooking,

    updateBookingStatus,

};