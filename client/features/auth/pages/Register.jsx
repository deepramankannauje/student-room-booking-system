import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

import RegisterForm from "../components/RegisterForm";

const Register = () => {
    return (
        <div className="min-h-screen bg-[#08090D]">

            <div className="grid min-h-screen lg:grid-cols-[42%_58%]">

                {/* Left Side */}

                <div className="flex items-center justify-center px-6 md:px-10 lg:px-14">

                    <div className="w-full max-w-md">

                        {/* Logo */}

                        <Link
                            to="/"
                            className="inline-flex items-center gap-3"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F2B441]">

                                <GraduationCap
                                    size={22}
                                    className="text-[#1A1206]"
                                />

                            </div>

                            <span className="text-lg font-semibold text-white">

                                Student Room Booking

                            </span>

                        </Link>

                        {/* Heading */}

                        <div className="mt-8">

                            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#F2B441]">

                                Create Account

                            </span>

                            <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl">

                                Join the platform

                            </h1>

                            <p className="mt-4 text-base leading-7 text-gray-400">

                                Create your account to reserve classrooms,
                                laboratories, seminar halls and study rooms
                                across your campus.

                            </p>

                        </div>

                        {/* Form */}

                        <div className="mt-8">

                            <RegisterForm />

                        </div>

                    </div>

                </div>

                {/* Right Side */}

                <div className="relative hidden overflow-hidden lg:block">

                    <img
                        src="/assets/register-cover.jpg"
                        alt="University"
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/60"></div>

                    <div className="relative flex h-full items-end">

                        <div className="w-full p-10 xl:p-16">

                            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">

                                Student Room Booking System

                            </span>

                            <h2 className="mt-6 text-4xl font-bold leading-tight text-white xl:text-6xl">

                                Start booking.

                                <br />

                                <span className="text-[#F2B441]">

                                    Stay productive.

                                </span>

                            </h2>

                            <p className="mt-5 max-w-xl text-base leading-8 text-gray-300 xl:text-lg">

                                Join thousands of students already using
                                our platform to instantly reserve study
                                spaces, classrooms, laboratories and
                                university facilities.

                            </p>

                            {/* Stats */}

                            <div className="mt-10 flex gap-10">

                                <div>

                                    <h3 className="text-3xl font-bold text-white">

                                        120+

                                    </h3>

                                    <p className="mt-1 text-sm text-gray-300">

                                        Rooms

                                    </p>

                                </div>

                                <div>

                                    <h3 className="text-3xl font-bold text-white">

                                        2K+

                                    </h3>

                                    <p className="mt-1 text-sm text-gray-300">

                                        Students

                                    </p>

                                </div>

                                <div>

                                    <h3 className="text-3xl font-bold text-white">

                                        5K+

                                    </h3>

                                    <p className="mt-1 text-sm text-gray-300">

                                        Bookings

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Register;