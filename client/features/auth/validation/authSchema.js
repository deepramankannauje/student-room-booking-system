import { z } from "zod";

/* =========================================
   Login Schema
========================================= */

export const loginSchema = z.object({
    email: z
        .string()
        .trim()
        .min(1, "Email is required.")
        .email("Please enter a valid email address."),

    password: z
        .string()
        .min(1, "Password is required.")
        .min(6, "Password must be at least 6 characters.")
});

/* =========================================
   Register Schema
========================================= */

export const registerSchema = z
    .object({
        full_name: z
            .string()
            .trim()
            .min(3, "Full name must be at least 3 characters.")
            .max(100, "Full name is too long."),

        email: z
            .string()
            .trim()
            .min(1, "Email is required.")
            .email("Please enter a valid email address."),

        phone: z
            .string()
            .trim()
            .min(10, "Phone number must be at least 10 digits.")
            .max(15, "Phone number is too long.")
            .optional()
            .or(z.literal("")),

        student_id: z
            .string()
            .trim()
            .min(1, "Student ID is required."),

        password: z
            .string()
            .min(8, "Password must be at least 8 characters.")
            .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
            .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
            .regex(/[0-9]/, "Password must contain at least one number.")
            .regex(
                /[!@#$%^&*(),.?":{}|<>]/,
                "Password must contain at least one special character."
            ),

        confirmPassword: z
            .string()
            .min(1, "Confirm Password is required.")
    })
    .refine(
        (data) => data.password === data.confirmPassword,
        {
            path: ["confirmPassword"],
            message: "Passwords do not match."
        }
    );