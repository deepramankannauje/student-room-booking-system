import { Link } from "react-router-dom";
import {
    CalendarDays,
    Clock3,
    ArrowRight,
} from "lucide-react";

import { useAuth } from "../../../src/context/AuthContext";

const DashboardHero = () => {

    const { user } = useAuth();

    const getGreeting = () => {

        const hour = new Date().getHours();

        if (hour < 12) return "Good Morning";

        if (hour < 18) return "Good Afternoon";

        return "Good Evening";

    };

    const today = new Date().toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (

        <section
            className="
                overflow-hidden
                rounded-3xl
                border
                border-[#242833]
                bg-gradient-to-r
                from-[#111319]
                via-[#151821]
                to-[#111319]
                p-8
                lg:p-10
            "
        >

            <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">

                {/* Left */}

                <div className="max-w-2xl">

                    <span
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-[#F2B441]/20
                            bg-[#F2B441]/10
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-[#F2B441]
                        "
                    >

                        👋 Welcome Back

                    </span>

                    <h1
                        className="
                            mt-5
                            text-4xl
                            font-bold
                            leading-tight
                            text-white
                            lg:text-5xl
                        "
                    >

                        {getGreeting()},

                        <span className="text-[#F2B441]">

                            {" "}
                            {user?.name || "Student"}

                        </span>

                    </h1>

                    <p
                        className="
                            mt-5
                            max-w-xl
                            text-base
                            leading-8
                            text-gray-400
                        "
                    >

                        Manage your classroom reservations, check
                        upcoming bookings, and explore available rooms
                        across your university campus.

                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">

                        <Link
                            to="/rooms"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-xl
                                bg-[#F2B441]
                                px-6
                                py-3
                                font-semibold
                                text-[#1A1206]
                                transition
                                hover:bg-[#F5C468]
                            "
                        >

                            Browse Rooms

                            <ArrowRight size={18} />

                        </Link>

                        <Link
                            to="/my-bookings"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-[#242833]
                                bg-[#111319]
                                px-6
                                py-3
                                text-white
                                transition
                                hover:border-[#F2B441]
                            "
                        >

                            My Bookings

                        </Link>

                    </div>

                </div>

                {/* Right */}

                <div
                    className="
                        grid
                        gap-4
                        sm:grid-cols-2
                        lg:w-[340px]
                    "
                >

                    <div
                        className="
                            rounded-2xl
                            border
                            border-[#242833]
                            bg-[#08090D]
                            p-5
                        "
                    >

                        <CalendarDays
                            size={28}
                            className="mb-4 text-[#F2B441]"
                        />

                        <p className="text-sm text-gray-400">

                            Today's Date

                        </p>

                        <h3 className="mt-2 font-semibold text-white">

                            {today}

                        </h3>

                    </div>

                    <div
                        className="
                            rounded-2xl
                            border
                            border-[#242833]
                            bg-[#08090D]
                            p-5
                        "

                    >

                        <Clock3
                            size={28}
                            className="mb-4 text-[#4ADE80]"
                        />

                        <p className="text-sm text-gray-400">

                            Current Time

                        </p>

                        <h3
                            className="mt-2 font-semibold text-white"
                        >

                            {new Date().toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}

                        </h3>

                    </div>

                </div>

            </div>

        </section>

    );

};

export default DashboardHero;