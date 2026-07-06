import { useState, useEffect, useRef } from "react";
import { Bell } from "lucide-react";

const NotificationDropdown = () => {
    const [open, setOpen] = useState(false);

    const dropdownRef = useRef(null);

    // Temporary notifications
    const notifications = [
        {
            id: 1,
            title: "Room Booking Confirmed",
            message: "Your booking for Lab 204 has been confirmed.",
            time: "5 min ago",
        },
        {
            id: 2,
            title: "Reminder",
            message: "You have a booking at 2:00 PM today.",
            time: "1 hour ago",
        },
        {
            id: 3,
            title: "New Room Available",
            message: "Seminar Hall B is now available.",
            time: "Yesterday",
        },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
    }, []);

    return (
        <div
            className="relative"
            ref={dropdownRef}
        >
            {/* Bell */}

            <button
                onClick={() => setOpen(!open)}
                className="
                    relative
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#242833]
                    bg-[#111319]
                    transition
                    hover:border-[#F2B441]
                "
            >
                <Bell
                    size={20}
                    className="text-gray-300"
                />

                {/* Badge */}

                {notifications.length > 0 && (
                    <span
                        className="
                            absolute
                            right-2
                            top-2
                            h-2.5
                            w-2.5
                            rounded-full
                            bg-[#4ADE80]
                        "
                    />
                )}
            </button>

            {/* Dropdown */}

            {open && (
                <div
                    className="
                        absolute
                        right-0
                        mt-3
                        w-80
                        overflow-hidden
                        rounded-2xl
                        border
                        border-[#242833]
                        bg-[#111319]
                        shadow-2xl
                    "
                >
                    {/* Header */}

                    <div className="border-b border-[#242833] px-5 py-4">

                        <h3 className="font-semibold text-white">

                            Notifications

                        </h3>

                    </div>

                    {/* Body */}

                    <div className="max-h-96 overflow-y-auto">

                        {notifications.length === 0 ? (

                            <div className="p-6 text-center">

                                <p className="text-gray-400">

                                    No notifications.

                                </p>

                            </div>

                        ) : (

                            notifications.map((item) => (

                                <div
                                    key={item.id}
                                    className="
                                        cursor-pointer
                                        border-b
                                        border-[#242833]
                                        px-5
                                        py-4
                                        transition
                                        hover:bg-[#171A21]
                                    "
                                >
                                    <div className="flex items-start justify-between">

                                        <h4 className="font-medium text-white">

                                            {item.title}

                                        </h4>

                                        <span className="text-xs text-gray-500">

                                            {item.time}

                                        </span>

                                    </div>

                                    <p className="mt-2 text-sm text-gray-400">

                                        {item.message}

                                    </p>

                                </div>

                            ))

                        )}

                    </div>

                    {/* Footer */}

                    <button
                        className="
                            w-full
                            border-t
                            border-[#242833]
                            py-3
                            text-sm
                            font-medium
                            text-[#F2B441]
                            transition
                            hover:bg-[#171A21]
                        "
                    >
                        View All Notifications
                    </button>

                </div>
            )}
        </div>
    );
};

export default NotificationDropdown;