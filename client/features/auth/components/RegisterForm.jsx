import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Eye, EyeOff } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import toast from "react-hot-toast";

import { registerSchema } from "../validation/authSchema";
import { registerUser } from "../services/authService";
import { useAuth } from "../../../src/context/AuthContext";
import { Navigate } from "react-router-dom";



const RegisterForm = () => {

    const navigate = useNavigate();
    const { login } = useAuth();


    
    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {

        register,

        handleSubmit,

        reset,

        formState: { errors }

    } = useForm({

        resolver: zodResolver(registerSchema),

        defaultValues: {

            full_name: "",

            email: "",

            phone: "",

            student_id: "",

            password: "",

            confirmPassword: ""

        }

    });

  const onSubmit = async (formData) => {

    try {

        setLoading(true);

        const payload = {

            full_name: formData.full_name,

            email: formData.email,

            phone: formData.phone,

            student_id: formData.student_id,

            password: formData.password,

        };

        const response = await registerUser(payload);

        login(
            response.token,
            response.user
        );

        toast.success(response.message);

        navigate("/dashboard", {
            replace: true,
        });

    } catch (error) {

        toast.error(
            error.message || "Registration failed."
        );

    } finally {

        setLoading(false);

    }

};

    const inputClass = `
        w-full
        rounded-lg
        border
        border-[#242833]
        bg-[#111319]
        px-4
        py-3
        text-sm
        text-white
        placeholder:text-gray-500
        outline-none
        transition
        focus:border-[#F2B441]
        focus:ring-2
        focus:ring-[#F2B441]/20
    `;

    const labelClass =
        "mb-1.5 block text-sm font-medium text-gray-300";

    const errorClass =
        "mt-1 text-xs text-red-400";

    return (

        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
        >

            {/* Full Name + Email */}

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                {/* Full Name */}

                <div>

                    <label
                        htmlFor="full_name"
                        className={labelClass}
                    >

                        Full Name

                    </label>

                    <input

                        id="full_name"

                        type="text"

                        placeholder="John Doe"

                        autoComplete="name"

                        {...register("full_name")}

                        className={inputClass}

                    />

                    {

                        errors.full_name && (

                            <p className={errorClass}>

                                {errors.full_name.message}

                            </p>

                        )

                    }

                </div>

                {/* Email */}

                <div>

                    <label
                        htmlFor="email"
                        className={labelClass}
                    >

                        Email Address

                    </label>

                    <input

                        id="email"

                        type="email"

                        placeholder="you@university.edu"

                        autoComplete="email"

                        {...register("email")}

                        className={inputClass}

                    />

                    {

                        errors.email && (

                            <p className={errorClass}>

                                {errors.email.message}

                            </p>

                        )

                    }

                </div>

            </div>

            {/* Phone + Student ID */}

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                {/* Phone */}

                <div>

                    <label
                        htmlFor="phone"
                        className={labelClass}
                    >

                        Phone Number

                    </label>

                    <input

                        id="phone"

                        type="text"

                        placeholder="+91 9876543210"

                        autoComplete="tel"

                        {...register("phone")}

                        className={inputClass}

                    />

                    {

                        errors.phone && (

                            <p className={errorClass}>

                                {errors.phone.message}

                            </p>

                        )

                    }

                </div>

                {/* Student ID */}

                <div>

                    <label
                        htmlFor="student_id"
                        className={labelClass}
                    >

                        Student ID

                    </label>

                    <input

                        id="student_id"

                        type="text"

                        placeholder="STU-2025-001"

                        {...register("student_id")}

                        className={inputClass}

                    />

                    {

                        errors.student_id && (

                            <p className={errorClass}>

                                {errors.student_id.message}

                            </p>

                        )

                    }

                </div>

            </div>

                        {/* Password + Confirm Password */}

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                {/* Password */}

                <div>

                    <label
                        htmlFor="password"
                        className={labelClass}
                    >

                        Password

                    </label>

                    <div className="relative">

                        <input

                            id="password"

                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }

                            placeholder="Create password"

                            autoComplete="new-password"

                            {...register("password")}

                            className={`${inputClass} pr-12`}

                        />

                        <button

                            type="button"

                            onClick={() =>
                                setShowPassword(!showPassword)
                            }

                            className="
                                absolute
                                right-4
                                top-1/2
                                -translate-y-1/2
                                text-gray-500
                                transition-colors
                                hover:text-[#F2B441]
                            "

                        >

                            {

                                showPassword

                                    ?

                                    <EyeOff size={18} />

                                    :

                                    <Eye size={18} />

                            }

                        </button>

                    </div>

                    {

                        errors.password && (

                            <p className={errorClass}>

                                {errors.password.message}

                            </p>

                        )

                    }

                </div>

                {/* Confirm Password */}

                <div>

                    <label
                        htmlFor="confirmPassword"
                        className={labelClass}
                    >

                        Confirm Password

                    </label>

                    <div className="relative">

                        <input

                            id="confirmPassword"

                            type={
                                showConfirmPassword
                                    ? "text"
                                    : "password"
                            }

                            placeholder="Confirm password"

                            autoComplete="new-password"

                            {...register("confirmPassword")}

                            className={`${inputClass} pr-12`}

                        />

                        <button

                            type="button"

                            onClick={() =>
                                setShowConfirmPassword(
                                    !showConfirmPassword
                                )
                            }

                            className="
                                absolute
                                right-4
                                top-1/2
                                -translate-y-1/2
                                text-gray-500
                                transition-colors
                                hover:text-[#F2B441]
                            "

                        >

                            {

                                showConfirmPassword

                                    ?

                                    <EyeOff size={18} />

                                    :

                                    <Eye size={18} />

                            }

                        </button>

                    </div>

                    {

                        errors.confirmPassword && (

                            <p className={errorClass}>

                                {errors.confirmPassword.message}

                            </p>

                        )

                    }

                </div>

            </div>

            {/* Terms */}

            <div className="flex items-start gap-3">

                <input

                    type="checkbox"

                    className="
                        mt-1
                        h-4
                        w-4
                        rounded
                        border-[#242833]
                        bg-[#111319]
                        accent-[#F2B441]
                    "

                    required

                />

                <p className="text-xs leading-5 text-gray-400">

                    I agree to the{" "}

                    <Link
                        to="/terms"
                        className="font-medium text-[#F2B441] hover:text-[#F5C468]"
                    >

                        Terms & Conditions

                    </Link>

                    {" "}and{" "}

                    <Link
                        to="/privacy"
                        className="font-medium text-[#F2B441] hover:text-[#F5C468]"
                    >

                        Privacy Policy

                    </Link>

                </p>

            </div>

            {/* Submit Button */}

            <button

                type="submit"

                disabled={loading}

                className="
                    w-full
                    rounded-lg
                    bg-[#F2B441]
                    py-3
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

                {

                    loading

                        ?

                        "Creating Account..."

                        :

                        "Create Account"

                }

            </button>

            {/* Divider */}

            <div className="relative py-1">

                <div className="absolute inset-0 flex items-center">

                    <div className="w-full border-t border-[#242833]" />

                </div>

                <div className="relative flex justify-center">

                    <span className="bg-[#08090D] px-3 text-[11px] uppercase tracking-[0.25em] text-gray-500">

                        OR

                    </span>

                </div>

            </div>

            {/* Login */}

            <p className="text-center text-sm text-gray-400">

                Already have an account?{" "}

                <Link

                    to="/login"

                    className="
                        font-semibold
                        text-[#F2B441]
                        transition-colors
                        hover:text-[#F5C468]
                    "

                >

                    Sign In

                </Link>

            </p>

        </form>

    );

};

export default RegisterForm;