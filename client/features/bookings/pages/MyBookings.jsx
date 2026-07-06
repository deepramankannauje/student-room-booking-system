import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getMyBookings } from "../services/bookingService";

import MyBookingsHeader from "../component/MyBookingsHeader";
import BookingGrid from "../component/BookingGrid";

const MyBookings = () => {

    const [bookings, setBookings] = useState([]);

    const [loading, setLoading] = useState(true);

    const fetchBookings = async () => {

        try {

            setLoading(true);

            const response = await getMyBookings();

            let bookingData = [];

            if (Array.isArray(response)) {

                bookingData = response;

            } else if (Array.isArray(response.bookings)) {

                bookingData = response.bookings;

            } else if (Array.isArray(response.data)) {

                bookingData = response.data;

            }

            setBookings(bookingData);

        } catch (error) {

            console.error(error);

            toast.error(
                error?.response?.data?.message ||
                "Failed to load bookings."
            );

            setBookings([]);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchBookings();

    }, []);

    return (

        <div className="min-h-screen bg-[#08090D] text-white">

            <MyBookingsHeader />

            <main className="mx-auto max-w-7xl px-6 py-8">

                <BookingGrid
                    bookings={bookings}
                    loading={loading}
                    refreshBookings={fetchBookings}
                />

            </main>

        </div>

    );

};

export default MyBookings;