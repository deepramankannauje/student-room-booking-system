import { Link } from "react-router-dom";

import {
    GraduationCap,
    Search,
} from "lucide-react";

import NotificationDropdown from "./NotificationDropdown";
import ProfileDropdown from "./ProfileDropdown";

const DashboardHeader = () => {
    return (
        <header className="sticky top-0 z-50 border-b border-[#242833] bg-[#08090D]/95 backdrop-blur-lg">

            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                {/* Logo */}

                <Link
                    to="/dashboard"
                    className="flex items-center gap-3"
                >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F2B441]">

                        <GraduationCap
                            size={22}
                            className="text-[#1A1206]"
                        />

                    </div>

                    <div className="hidden sm:block">

                        <h1 className="text-lg font-bold text-white">

                            Student Room

                        </h1>

                        <p className="text-xs text-gray-400">

                            Booking System

                        </p>

                    </div>

                </Link>

                {/* Search */}

                <div className="mx-10 hidden max-w-md flex-1 lg:block">

                    <div className="relative">

                        <Search
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        />

                        <input
                            type="text"
                            placeholder="Search rooms..."
                            className="
                                w-full
                                rounded-xl
                                border
                                border-[#242833]
                                bg-[#111319]
                                py-3
                                pl-11
                                pr-4
                                text-sm
                                text-white
                                placeholder:text-gray-500
                                outline-none
                                transition
                                focus:border-[#F2B441]
                            "
                        />

                    </div>

                </div>

                {/* Right */}

                <div className="flex items-center gap-4">

                    <NotificationDropdown />

                    <ProfileDropdown />

                </div>

            </div>

        </header>
    );
};

export default DashboardHeader;