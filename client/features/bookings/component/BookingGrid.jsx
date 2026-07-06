import BookingCard from "./BookingCard";

const BookingGrid = ({
    bookings,
    loading,
    refreshBookings,
}) => {

    if (loading) {

        return (

            <div className="flex items-center justify-center py-24">

                <p className="text-lg text-gray-400">

                    Loading your bookings...

                </p>

            </div>

        );

    }

    if (!bookings.length) {

        return (

            <div className="rounded-2xl border border-dashed border-[#242833] bg-[#111319] py-20 text-center">

                <h2 className="text-2xl font-semibold text-white">

                    No Bookings Found

                </h2>

                <p className="mt-3 text-gray-400">

                    You haven't booked any rooms yet.

                </p>

            </div>

        );

    }

    return (

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {bookings.map((booking) => (

                <BookingCard
                    key={booking.id}
                    booking={booking}
                    refreshBookings={refreshBookings}
                />

            ))}

        </div>

    );

};

export default BookingGrid;