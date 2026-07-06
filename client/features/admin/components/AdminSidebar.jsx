import {
    LayoutDashboard,
    CalendarDays,
    PlusSquare,
    LogOut,
    Menu,
    X,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminSidebar = () => {

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const menuItems = [
        {
            title: "Dashboard",
            path: "/admin",
            icon: <LayoutDashboard size={20} />,
        },
        {
            title: "Bookings",
            path: "/admin/bookings",
            icon: <CalendarDays size={20} />,
        },
        {
            title: "Create Room",
            path: "/admin/create-room",
            icon: <PlusSquare size={20} />,
        },
    ];

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login", {
            replace: true,
        });

    };

    return (
        <>
            {/* Mobile Toggle */}

            <button
                onClick={() => setOpen(!open)}
                className="fixed left-4 top-4 z-50 rounded-lg border border-[#242833] bg-[#111319] p-2 text-white lg:hidden"
            >
                {open ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Overlay */}

            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                />
            )}

            {/* Sidebar */}

            <aside
                className={`
                    fixed
                    left-0
                    top-0
                    z-50
                    h-screen
                    w-72
                    border-r
                    border-[#242833]
                    bg-[#111319]
                    transition-transform
                    duration-300
                    lg:translate-x-0
                    ${
                        open
                            ? "translate-x-0"
                            : "-translate-x-full"
                    }
                `}
            >
                {/* Logo */}

                <div className="border-b border-[#242833] p-6">

                    <h1 className="text-2xl font-bold text-[#F2B441]">

                        Admin Panel

                    </h1>

                    <p className="mt-1 text-sm text-gray-400">

                        Student Room Booking

                    </p>

                </div>

                {/* Navigation */}

                <nav className="mt-6 flex flex-col gap-2 px-4">

                    {menuItems.map((item) => (

                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition ${
                                    isActive
                                        ? "bg-[#F2B441] text-black"
                                        : "text-gray-300 hover:bg-[#1A1E26] hover:text-white"
                                }`
                            }
                        >

                            {item.icon}

                            {item.title}

                        </NavLink>

                    ))}

                </nav>

                {/* Bottom */}

                <div className="absolute bottom-0 w-full border-t border-[#242833] p-4">

                    <button
                        onClick={handleLogout}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 py-3 font-semibold text-white transition hover:bg-red-600"
                    >

                        <LogOut size={18} />

                        Logout

                    </button>

                </div>

            </aside>
        </>
    );
};

export default AdminSidebar;