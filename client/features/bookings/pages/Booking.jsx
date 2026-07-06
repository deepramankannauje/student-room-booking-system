import { useLocation } from "react-router-dom";

import BookingHeader from "../component/BookingHeader";
import BookingForm from "../component/BookingForm";
import BookingSummary from "../component/BookingSummary";

const Booking = () => {

    const { state } = useLocation();

    const room = state?.room;

    return (

        <div className="min-h-screen bg-[#08090D] text-white">

            <BookingHeader />

            <main className="mx-auto max-w-7xl px-6 py-10">

                <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">

                    <BookingForm room={room} />

                    <BookingSummary room={room} />

                </div>

            </main>

        </div>

    );

};

export default Booking;