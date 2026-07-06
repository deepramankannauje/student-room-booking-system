import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Eye, EyeOff } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import toast from "react-hot-toast";

import { loginSchema } from "../validation/authSchema";
import { loginUser } from "../services/authService";

import { useAuth } from "../../../src/context/AuthContext";

const LoginForm = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (formData) => {
    try {
        setLoading(true);

        const response = await loginUser(formData);

        login(response.token, response.user);

        toast.success(response.message);

        if (response.user.role === "admin") {
            navigate("/admin", {
                replace: true,
            });
        } else {
            navigate("/dashboard", {
                replace: true,
            });
        }

    } catch (error) {

        toast.error(
            error.response?.data?.message ||
            error.message ||
            "Login failed."
        );

    } finally {

        setLoading(false);

    }
};

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >
            {/* Email */}

            <div>

                <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                >
                    Email Address
                </label>

                <input
                    id="email"
                    type="email"
                    placeholder="you@university.edu"
                    autoComplete="email"
                    {...register("email")}
                    className="
                        w-full
                        rounded-xl
                        border
                        border-[#242833]
                        bg-[#111319]
                        px-4
                        py-3.5
                        text-white
                        placeholder:text-gray-500
                        outline-none
                        transition-all
                        duration-200
                        focus:border-[#F2B441]
                        focus:ring-4
                        focus:ring-[#F2B441]/20
                    "
                />

                {errors.email && (
                    <p className="mt-2 text-sm text-red-400">
                        {errors.email.message}
                    </p>
                )}

            </div>

            {/* Password */}

            <div>

                <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-300"
                >
                    Password
                </label>

                <div className="relative">

                    <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        {...register("password")}
                        className="
                            w-full
                            rounded-xl
                            border
                            border-[#242833]
                            bg-[#111319]
                            px-4
                            py-3.5
                            pr-12
                            text-white
                            placeholder:text-gray-500
                            outline-none
                            transition-all
                            duration-200
                            focus:border-[#F2B441]
                            focus:ring-4
                            focus:ring-[#F2B441]/20
                        "
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="
                            absolute
                            right-4
                            top-1/2
                            -translate-y-1/2
                            text-gray-500
                            hover:text-[#F2B441]
                            transition-colors
                        "
                    >
                        {showPassword ? (
                            <EyeOff size={20} />
                        ) : (
                            <Eye size={20} />
                        )}
                    </button>

                </div>

                {errors.password && (
                    <p className="mt-2 text-sm text-red-400">
                        {errors.password.message}
                    </p>
                )}

            </div>

            {/* Remember + Forgot */}

            <div className="flex items-center justify-between">

                <label className="flex items-center gap-3 text-sm text-gray-400">

                    <input
                        type="checkbox"
                        className="
                            h-4
                            w-4
                            rounded
                            border-[#242833]
                            bg-[#111319]
                            accent-[#F2B441]
                        "
                    />

                    Remember me

                </label>

                <button
                    type="button"
                    className="
                        text-sm
                        font-medium
                        text-gray-400
                        transition-colors
                        hover:text-[#F2B441]
                    "
                >
                    Forgot Password?
                </button>

            </div>

            {/* Submit */}

            <button
                type="submit"
                disabled={loading}
                className="
                    w-full
                    rounded-xl
                    bg-[#F2B441]
                    py-3.5
                    font-semibold
                    text-[#1A1206]
                    transition-all
                    duration-200
                    hover:bg-[#F5C468]
                    active:scale-[0.99]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                "
            >
                {loading ? "Signing In..." : "Sign In"}
            </button>

            {/* Divider */}

            <div className="relative">

                <div className="absolute inset-0 flex items-center">

                    <div className="w-full border-t border-[#242833]" />

                </div>

                <div className="relative flex justify-center">

                    <span className="bg-[#08090D] px-4 text-xs uppercase tracking-[0.2em] text-gray-500">

                        New Here?

                    </span>

                </div>

            </div>

            {/* Register */}

            <p className="text-center text-sm text-gray-400">

                Don't have an account?{" "}

                <Link
                    to="/register"
                    className="
                        font-semibold
                        text-[#F2B441]
                        transition-colors
                        hover:text-[#F5C468]
                    "
                >
                    Create Account
                </Link>

            </p>

        </form>
    );
};

export default LoginForm;