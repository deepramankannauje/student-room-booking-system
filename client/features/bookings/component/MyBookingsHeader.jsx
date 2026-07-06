import { CalendarDays } from "lucide-react";

const MyBookingsHeader = () => {
    return (
        <header className="border-b border-[#242833]">

            <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-8">

                <div className="rounded-xl bg-[#F2B441]/10 p-4">

                    <CalendarDays
                        size={30}
                        className="text-[#F2B441]"
                    />

                </div>

                <div>

                    <h1 className="text-3xl font-bold">

                        Your Bookings

                    </h1>

                    <p className="mt-1 text-gray-400">

                        View and manage your room bookings.

                    </p>

                </div>

            </div>

        </header>
    );
};

export default MyBookingsHeader;