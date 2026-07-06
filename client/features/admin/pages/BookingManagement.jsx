import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import BookingTable from "../components/BookingTable";

import {
    getAllBookings,
    updateBookingStatus,
} from "../services/adminService";

const BookingManagement = () => {

    const [bookings, setBookings] = useState([]);

    const [loading, setLoading] = useState(true);

    const fetchBookings = async () => {

        try {

            setLoading(true);

            const response = await getAllBookings();

            setBookings(response.bookings || []);

        } catch (error) {

            console.error(error);

            toast.error(
                error?.response?.data?.message ||
                "Failed to load bookings."
            );

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchBookings();

    }, []);

    const handleStatusUpdate = async (
        bookingId,
        status
    ) => {

        try {

            await updateBookingStatus(
                bookingId,
                { status }
            );

            toast.success(
                `Booking ${status} successfully.`
            );

            fetchBookings();

        } catch (error) {

            console.error(error);

            toast.error(
                error?.response?.data?.message ||
                "Failed to update booking."
            );

        }

    };

    return (

        <div className="p-8">

            <div className="mb-8 flex items-center justify-between">

                <h1 className="text-3xl font-bold text-white">

                    Booking Management

                </h1>

                <button
                    onClick={fetchBookings}
                    className="rounded-lg bg-[#F2B441] px-5 py-2 font-semibold text-black hover:bg-[#e5a62e]"
                >
                    Refresh
                </button>

            </div>

            <BookingTable
                bookings={bookings}
                loading={loading}
                onStatusUpdate={handleStatusUpdate}
            />

        </div>

    );

};

export default BookingManagement;