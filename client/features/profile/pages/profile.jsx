import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    GraduationCap,
    Mail,
    Phone,
    IdCard,
    Building2,
    CalendarDays,
    BookOpenCheck,
    Camera,
    Pencil,
    Save,
    X,
    Lock,
    LogOut,
    CheckCircle2,
} from "lucide-react";

import { useAuth } from "../../../src/context/AuthContext";

// Read-only stat tiles. Swap these values for real data once
// booking history is wired up to an API.
const PROFILE_STATS = [
    { id: "total-bookings", icon: BookOpenCheck, value: "8", label: "Total Bookings" },
    { id: "upcoming", icon: CalendarDays, value: "2", label: "Upcoming" },
    { id: "member-since", icon: GraduationCap, value: "2024", label: "Member Since" },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// A single labeled field. Renders as plain text normally, and as
// an input when the parent form is in edit mode.
const ProfileField = ({ icon: Icon, label, name, value, onChange, isEditing, type = "text", error }) => (
    <div>
        <label htmlFor={name} className="flex items-center gap-2 text-sm text-gray-400">
            <Icon size={16} className="text-[#F2B441]" aria-hidden="true" />
            {label}
        </label>

        {isEditing ? (
            <>
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    className={`mt-1.5 w-full rounded-lg border bg-[#0D0F14] px-3 py-2 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2B441]/40 ${
                        error ? "border-red-500/60" : "border-[#242833] focus:border-[#F2B441]/60"
                    }`}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? `${name}-error` : undefined}
                />
                {error && (
                    <p id={`${name}-error`} className="mt-1 text-xs text-red-400">
                        {error}
                    </p>
                )}
            </>
        ) : (
            <p className="mt-1.5 text-base font-medium">{value || "—"}</p>
        )}
    </div>
);

const Profile = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const initialForm = useMemo(
        () => ({
            full_name: user?.full_name || "",
            email: user?.email || "",
            phone: user?.phone || "",
            student_id: user?.student_id || "",
            department: user?.department || "",
        }),
        [user]
    );

    const [isEditing, setIsEditing] = useState(false);
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [isSaving, setIsSaving] = useState(false);
    const [savedMessage, setSavedMessage] = useState(false);

    const firstName = form.full_name.split(" ")[0] || "Student";
    const initial = firstName.charAt(0).toUpperCase();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const validate = () => {
        const nextErrors = {};
        if (!form.full_name.trim()) nextErrors.full_name = "Name is required.";
        if (!form.email.trim()) {
            nextErrors.email = "Email is required.";
        } else if (!EMAIL_PATTERN.test(form.email)) {
            nextErrors.email = "Enter a valid email address.";
        }
        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const handleCancel = () => {
        setForm(initialForm);
        setErrors({});
        setIsEditing(false);
    };

    const handleSave = async (event) => {
        event.preventDefault();
        if (!validate()) return;

        setIsSaving(true);
        try {
            // Replace with a real API call, e.g.:
            // await api.patch("/me", form);
            await new Promise((resolve) => setTimeout(resolve, 600));

            setIsEditing(false);
            setSavedMessage(true);
            setTimeout(() => setSavedMessage(false), 3000);
        } finally {
            setIsSaving(false);
        }
    };

    const handleLogout = () => {
        logout();
        navigate("/login", { replace: true });
    };

    return (
        <div className="min-h-screen bg-[#08090D] text-white flex flex-col">
            {/* Header */}
            <header className="border-b border-[#242833]">
                <div className="mx-auto flex max-w-4xl items-center gap-4 px-6 py-5">
                    <button
                        onClick={() => navigate("/dashboard")}
                        aria-label="Back to dashboard"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#242833] bg-[#111319] text-gray-300 transition-colors hover:border-[#F2B441]/40 hover:text-[#F2B441] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B441]"
                    >
                        <ArrowLeft size={18} />
                    </button>
                    <div>
                        <h1 className="text-xl font-bold leading-tight">My Profile</h1>
                        <p className="text-sm text-gray-400">
                            Manage your personal and account details
                        </p>
                    </div>
                </div>
            </header>

            <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-10">
                {/* Save confirmation toast, inline rather than a floating overlay */}
                {savedMessage && (
                    <div
                        role="status"
                        className="mb-6 flex items-center gap-2 rounded-xl border border-[#4ADE80]/30 bg-[#4ADE80]/10 px-4 py-3 text-sm text-[#4ADE80]"
                    >
                        <CheckCircle2 size={18} aria-hidden="true" />
                        Profile updated successfully.
                    </div>
                )}

                <form onSubmit={handleSave}>
                    {/* Identity card */}
                    <div className="rounded-2xl border border-[#242833] bg-[#111319] p-8">
                        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-5">
                                <div className="relative">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F2B441] text-3xl font-bold text-[#1A1206]">
                                        {initial}
                                    </div>
                                    {isEditing && (
                                        <button
                                            type="button"
                                            aria-label="Change profile photo"
                                            className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border border-[#242833] bg-[#0D0F14] text-gray-300 hover:text-[#F2B441] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B441]"
                                        >
                                            <Camera size={14} />
                                        </button>
                                    )}
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold">
                                        {form.full_name || "Student"}
                                    </h2>
                                    <p className="text-gray-400">{form.email || "No email set"}</p>
                                </div>
                            </div>

                            {!isEditing ? (
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(true)}
                                    className="flex items-center gap-2 rounded-xl border border-[#242833] bg-[#0D0F14] px-5 py-2.5 font-semibold text-white transition-all hover:border-[#F2B441]/60 hover:text-[#F2B441] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B441]"
                                >
                                    <Pencil size={16} aria-hidden="true" />
                                    Edit Profile
                                </button>
                            ) : (
                                <div className="flex gap-3">
                                    <button
                                        type="button"
                                        onClick={handleCancel}
                                        disabled={isSaving}
                                        className="flex items-center gap-2 rounded-xl border border-[#242833] bg-[#0D0F14] px-4 py-2.5 font-semibold text-gray-300 transition-all hover:text-white disabled:opacity-50"
                                    >
                                        <X size={16} aria-hidden="true" />
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSaving}
                                        className="flex items-center gap-2 rounded-xl bg-[#F2B441] px-4 py-2.5 font-semibold text-[#1A1206] transition-all hover:bg-[#F5C468] disabled:cursor-not-allowed disabled:opacity-70"
                                    >
                                        <Save size={16} aria-hidden="true" />
                                        {isSaving ? "Saving..." : "Save Changes"}
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Editable details */}
                        <div className="mt-8 grid gap-6 border-t border-[#242833] pt-8 sm:grid-cols-2">
                            <ProfileField
                                icon={GraduationCap}
                                label="Full Name"
                                name="full_name"
                                value={form.full_name}
                                onChange={handleChange}
                                isEditing={isEditing}
                                error={errors.full_name}
                            />
                            <ProfileField
                                icon={Mail}
                                label="Email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                isEditing={isEditing}
                                error={errors.email}
                            />
                            <ProfileField
                                icon={Phone}
                                label="Phone Number"
                                name="phone"
                                type="tel"
                                value={form.phone}
                                onChange={handleChange}
                                isEditing={isEditing}
                            />
                            <ProfileField
                                icon={IdCard}
                                label="Student ID"
                                name="student_id"
                                value={form.student_id}
                                onChange={handleChange}
                                isEditing={isEditing}
                            />
                            <ProfileField
                                icon={Building2}
                                label="Department"
                                name="department"
                                value={form.department}
                                onChange={handleChange}
                                isEditing={isEditing}
                            />
                        </div>
                    </div>
                </form>

                {/* Stats */}
                <div className="mt-6 grid gap-6 sm:grid-cols-3">
                    {PROFILE_STATS.map(({ id, icon: Icon, value, label }) => (
                        <div
                            key={id}
                            className="rounded-2xl border border-[#242833] bg-[#111319] p-6 transition-colors hover:border-[#F2B441]/40"
                        >
                            <Icon className="mb-3 text-[#F2B441]" size={28} aria-hidden="true" />
                            <h3 className="text-2xl font-bold">{value}</h3>
                            <p className="mt-1 text-sm text-gray-400">{label}</p>
                        </div>
                    ))}
                </div>

                {/* Security */}
                <div className="mt-6 rounded-2xl border border-[#242833] bg-[#111319] p-8">
                    <h3 className="text-lg font-semibold">Security</h3>
                    <p className="mt-1 text-sm text-gray-400">
                        Manage how you sign in and access your account.
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <button
                            type="button"
                            onClick={() => navigate("/change-password")}
                            className="flex items-center gap-2 rounded-xl border border-[#242833] bg-[#0D0F14] px-5 py-2.5 font-semibold text-white transition-all hover:border-[#F2B441]/60 hover:text-[#F2B441] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B441]"
                        >
                            <Lock size={16} aria-hidden="true" />
                            Change Password
                        </button>

                        <button
                            type="button"
                            onClick={handleLogout}
                            className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/5 px-5 py-2.5 font-semibold text-red-400 transition-all hover:bg-red-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
                        >
                            <LogOut size={16} aria-hidden="true" />
                            Logout
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Profile;