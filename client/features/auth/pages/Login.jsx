import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

import LoginForm from "../components/LoginForm";



const Login = () => {

    const token = localStorage.getItem("token");

if (token) {

    return <Navigate to="/dashboard" replace />;

}

    return (
        <div className="min-h-screen bg-zinc-950">

            <div className="grid min-h-screen lg:grid-cols-[45%_55%]">

                {/* Left */}

                <div className="flex items-center justify-center px-8 py-12">

                    <div className="w-full max-w-md">

                        {/* Logo */}

                        <Link
                            to="/"
                            className="inline-flex items-center gap-3"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">

                                <GraduationCap
                                    size={22}
                                    className="text-white"
                                />

                            </div>

                            <span className="text-lg font-semibold text-white">

                                Student Room Booking

                            </span>

                        </Link>

                        {/* Heading */}

                        <div className="mt-14">

                            <h1 className="text-5xl font-bold tracking-tight text-white">

                                Welcome back

                            </h1>

                            <p className="mt-4 text-lg leading-8 text-zinc-400">

                                Sign in to continue managing room
                                reservations across your campus.

                            </p>

                        </div>

                        {/* Form */}

                        <div className="mt-12">

                            <LoginForm />

                        </div>

                        {/* Bottom */}

                        <p className="mt-8 text-sm text-zinc-500">

                            Don't have an account?{" "}

                            <Link
                                to="/register"
                                className="font-medium text-white hover:text-blue-400 transition"
                            >
                                Create one
                            </Link>

                        </p>

                    </div>

                </div>

                {/* Right */}

                <div className="relative hidden lg:block overflow-hidden">

                    <img
                        src="/assets/login-cover.jpg"
                        alt="Campus"
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/45" />

                    <div className="relative flex h-full items-end p-16">

                        <div className="max-w-xl">

                            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">

                                Student Room Booking System

                            </span>

                            <h2 className="mt-8 text-6xl font-bold leading-tight text-white">

                                Book smarter.

                                <br />

                                Study better.

                            </h2>

                            <p className="mt-6 text-lg leading-8 text-zinc-200">

                                Reserve classrooms, seminar halls,
                                laboratories, and meeting rooms in
                                seconds with a modern booking platform
                                designed for universities.

                            </p>

                            <div className="mt-12 flex gap-12">

                                <div>

                                    <h3 className="text-4xl font-bold text-white">

                                        120+

                                    </h3>

                                    <p className="mt-2 text-zinc-300">

                                        Rooms

                                    </p>

                                </div>

                                <div>

                                    <h3 className="text-4xl font-bold text-white">

                                        2K+

                                    </h3>

                                    <p className="mt-2 text-zinc-300">

                                        Students

                                    </p>

                                </div>

                                <div>

                                    <h3 className="text-4xl font-bold text-white">

                                        5K+

                                    </h3>

                                    <p className="mt-2 text-zinc-300">

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

export default Login;