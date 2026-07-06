import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
    User,
    LayoutDashboard,
    Building2,
    LogOut,
    ChevronDown,
} from "lucide-react";

import { useAuth } from "../../../src/context/AuthContext";

const ProfileDropdown = () => {

    const navigate = useNavigate();

    const { user, logout } = useAuth();

    const [open, setOpen] = useState(false);

    const dropdownRef = useRef(null);

    useEffect(() => {

        const handleClickOutside = (event) => {

            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }

        };

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

    }, []);

    const handleLogout = () => {

        logout();

        navigate("/login");

    };

    return (

        <div
            ref={dropdownRef}
            className="relative"
        >

            {/* Profile Button */}

            <button
                onClick={() => setOpen(!open)}
                className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-[#242833]
                    bg-[#111319]
                    px-3
                    py-2
                    transition
                    hover:border-[#F2B441]
                "
            >

                <div
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-[#F2B441]
                        font-bold
                        text-[#1A1206]
                    "
                >

                    {user?.name
                        ? user.name.charAt(0).toUpperCase()
                        : "U"}

                </div>

                <div className="hidden text-left lg:block">

                    <p className="text-sm font-semibold text-white">

                        {user?.name || "Student"}

                    </p>

                    <p className="text-xs text-gray-400">

                        {user?.email}

                    </p>

                </div>

                <ChevronDown
                    size={18}
                    className="hidden text-gray-400 lg:block"
                />

            </button>

            {/* Dropdown */}

            {open && (

                <div
                    className="
                        absolute
                        right-0
                        mt-3
                        w-72
                        overflow-hidden
                        rounded-2xl
                        border
                        border-[#242833]
                        bg-[#111319]
                        shadow-2xl
                    "
                >

                    {/* User */}

                    <div className="border-b border-[#242833] p-5">

                        <div className="flex items-center gap-4">

                            <div
                                className="
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#F2B441]
                                    text-xl
                                    font-bold
                                    text-[#1A1206]
                                "
                            >

                                {user?.name
                                    ? user.name.charAt(0).toUpperCase()
                                    : "U"}

                            </div>

                            <div>

                                <h3 className="font-semibold text-white">

                                    {user?.name || "Student"}

                                </h3>

                                <p className="text-sm text-gray-400">

                                    {user?.email}

                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Navigation */}

                    <div className="p-2">

                        <Link
                            to="/dashboard"
                            className="
                                flex
                                items-center
                                gap-3
                                rounded-xl
                                px-4
                                py-3
                                text-gray-300
                                transition
                                hover:bg-[#171A21]
                                hover:text-[#F2B441]
                            "
                        >

                            <LayoutDashboard size={18} />

                            Dashboard

                        </Link>

                        <Link
                            to="/rooms"
                            className="
                                flex
                                items-center
                                gap-3
                                rounded-xl
                                px-4
                                py-3
                                text-gray-300
                                transition
                                hover:bg-[#171A21]
                                hover:text-[#F2B441]
                            "
                        >

                            <Building2 size={18} />

                            Rooms

                        </Link>

                        <Link
                            to="/profile"
                            className="
                                flex
                                items-center
                                gap-3
                                rounded-xl
                                px-4
                                py-3
                                text-gray-300
                                transition
                                hover:bg-[#171A21]
                                hover:text-[#F2B441]
                            "
                        >

                            <User size={18} />

                            My Profile

                        </Link>

                    </div>

                    {/* Logout */}

                    <div className="border-t border-[#242833] p-2">

                        <button
                            onClick={handleLogout}
                            className="
                                flex
                                w-full
                                items-center
                                gap-3
                                rounded-xl
                                px-4
                                py-3
                                text-red-400
                                transition
                                hover:bg-red-500/10
                            "
                        >

                            <LogOut size={18} />

                            Logout

                        </button>

                    </div>

                </div>

            )}

        </div>

    );

};

export default ProfileDropdown;