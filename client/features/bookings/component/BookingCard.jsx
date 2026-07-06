import {
    Building2,
    CalendarDays,
    Clock3,
    MapPin,
    ClipboardList,
} from "lucide-react";

import { cancelBooking } from "../services/bookingService";
import toast from "react-hot-toast";

const BookingCard = ({
    booking,
    refreshBookings,
    onViewDetails,
}) => {

    const handleCancel = async () => {

        if (
            booking.status === "cancelled" ||
            booking.status === "completed" ||
            booking.status === "rejected"
        ) {
            return;
        }

        try {

            await cancelBooking(booking.id);

            toast.success("Booking cancelled successfully.");

            refreshBookings?.();

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to cancel booking."
            );

        }

    };

    const statusClasses = {

        pending:
            "bg-yellow-500/15 text-yellow-400",

        approved:
            "bg-green-500/15 text-green-400",

        rejected:
            "bg-red-500/15 text-red-400",

        cancelled:
            "bg-gray-500/15 text-gray-400",

        completed:
            "bg-blue-500/15 text-blue-400",

    };

    return (

        <div className="group rounded-2xl border border-[#242833] bg-[#111319] p-6 transition hover:border-[#F2B441] hover:shadow-lg hover:shadow-[#F2B441]/5">

            {/* Header */}

            <div className="flex items-start justify-between gap-4">

                <div className="flex gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F2B441]/10">

                        <Building2
                            size={26}
                            className="text-[#F2B441]"
                        />

                    </div>

                    <div>

                        <h2 className="text-xl font-bold text-white">

                            {booking.room?.room_name ||
                                "Room Booking"}

                        </h2>

                        <p className="mt-1 text-sm text-gray-400">

                            Room {booking.room?.room_number}

                        </p>

                    </div>

                </div>

                <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                        statusClasses[
                            booking.status
                        ] || "bg-gray-500/15 text-gray-400"
                    }`}
                >

                    {booking.status}

                </span>

            </div>

            {/* Details */}

            <div className="mt-6 space-y-4">

                <div className="flex items-center gap-3 text-gray-300">

                    <CalendarDays
                        size={18}
                        className="text-[#F2B441]"
                    />

                    <span>

                        {booking.booking_date}

                    </span>

                </div>

                <div className="flex items-center gap-3 text-gray-300">

                    <Clock3
                        size={18}
                        className="text-[#F2B441]"
                    />

                    <span>

                        {booking.start_time} - {booking.end_time}

                    </span>

                </div>

                <div className="flex items-center gap-3 text-gray-300">

                    <MapPin
                        size={18}
                        className="text-[#F2B441]"
                    />

                    <span>

                        {booking.room?.building || "-"}

                    </span>

                </div>

                <div className="flex items-start gap-3 text-gray-300">

                    <ClipboardList
                        size={18}
                        className="mt-0.5 text-[#F2B441]"
                    />

                    <p className="line-clamp-2">

                        {booking.purpose || "No purpose provided"}

                    </p>

                </div>

            </div>

            {/* Buttons */}

            <div className="mt-8 flex gap-3">

                <button
                    onClick={() =>
                        onViewDetails?.(booking)
                    }
                    className="flex-1 rounded-xl border border-[#242833] py-2 font-medium text-white transition hover:border-[#F2B441]"
                >

                    View Details

                </button>

                <button
                    onClick={handleCancel}
                    disabled={
                        booking.status !== "pending"
                    }
                    className="flex-1 rounded-xl bg-red-500 py-2 font-semibold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-400"
                >

                    Cancel

                </button>

            </div>

        </div>

    );

};

export default BookingCard;