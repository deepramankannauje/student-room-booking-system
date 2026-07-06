import { Link } from "react-router-dom";
import {
    GraduationCap,
    Mail,
    Phone,
    MapPin,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="border-t border-[#242833] bg-[#08090D]">
            <div className="mx-auto max-w-7xl px-6 py-14">

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F2B441]">
                                <GraduationCap
                                    size={22}
                                    className="text-[#1A1206]"
                                />
                            </div>

                            <div>
                                <h2 className="text-lg font-bold text-white">
                                    Student Room
                                </h2>
                                <p className="text-sm text-gray-400">
                                    Booking System
                                </p>
                            </div>
                        </div>

                        <p className="mt-5 text-sm leading-7 text-gray-400">
                            A modern platform that enables students to
                            reserve classrooms, laboratories, seminar halls,
                            and study spaces quickly and efficiently.
                        </p>
                    </div>

                   

                    {/* Support */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Support
                        </h3>

                        <div className="space-y-3">
                            <Link
                                to="/about"
                                className="block text-gray-400 transition hover:text-[#F2B441]"
                            >
                                About Us
                            </Link>

                            <Link
                                to="/privacy"
                                className="block text-gray-400 transition hover:text-[#F2B441]"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                to="/terms"
                                className="block text-gray-400 transition hover:text-[#F2B441]"
                            >
                                Terms & Conditions
                            </Link>

                            <Link
                                to="/contact"
                                className="block text-gray-400 transition hover:text-[#F2B441]"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Contact
                        </h3>

                        <div className="space-y-4">

                            <div className="flex items-center gap-3 text-gray-400">
                                <Mail
                                    size={18}
                                    className="text-[#F2B441]"
                                />
                                support@studentrooms.com
                            </div>

                            <div className="flex items-center gap-3 text-gray-400">
                                <Phone
                                    size={18}
                                    className="text-[#F2B441]"
                                />
                                +91 98765 43210
                            </div>

                            <div className="flex items-start gap-3 text-gray-400">
                                <MapPin
                                    size={18}
                                    className="mt-1 text-[#F2B441]"
                                />
                                University Campus, India
                            </div>

                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#242833] pt-6 text-sm text-gray-500 md:flex-row">

                    <p>
                        © {new Date().getFullYear()} Student Room Booking
                        System. All rights reserved.
                    </p>

                    <p>
                        Built with ❤️ for students by the Student Room Team.
                    </p>

                </div>

            </div>
        </footer>
    );
};

export default Footer;