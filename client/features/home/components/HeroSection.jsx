import { Link } from "react-router-dom";
import { ArrowRight, Building2, Circle, CheckCircle2 } from "lucide-react";

// Demo schedule for the signature "door panel" — swap for live data later.
const SCHEDULE = [
    { time: "08:00", status: "free" },
    { time: "09:00", status: "booked" },
    { time: "10:00", status: "booked" },
    { time: "11:00", status: "free", now: true },
    { time: "12:00", status: "free" },
    { time: "13:00", status: "booked" },
];

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-[#0E1830] text-[#F7F3EA]">
            {/* Fonts — move these two lines into index.html <head> for production */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

                .hero-blueprint {
                    background-image:
                        radial-gradient(circle at 1px 1px, rgba(200,154,75,0.16) 1px, transparent 0);
                    background-size: 28px 28px;
                }
                @keyframes heroRise {
                    from { opacity: 0; transform: translateY(14px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes pulseDot {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.35; }
                }
                .hero-rise { animation: heroRise 0.7s cubic-bezier(0.22,1,0.36,1) both; }
                .hero-rise-1 { animation-delay: 0.05s; }
                .hero-rise-2 { animation-delay: 0.15s; }
                .hero-rise-3 { animation-delay: 0.25s; }
                .hero-rise-4 { animation-delay: 0.35s; }
                .hero-pulse { animation: pulseDot 2.2s ease-in-out infinite; }
                @media (prefers-reduced-motion: reduce) {
                    .hero-rise, .hero-pulse { animation: none; }
                }
            `}</style>

            {/* Ambient backdrop: blueprint grid + soft brass glow, both purely decorative */}
            <div className="hero-blueprint pointer-events-none absolute inset-0 opacity-60" />
            <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[#C89A4B]/10 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0E1830] via-[#0E1830]/98 to-[#0A1224]" style={{ zIndex: -1 }} />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
                <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-16 py-20 lg:py-0">

                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left max-w-xl">

                        <span className="hero-rise hero-rise-1 inline-flex items-center gap-2 border border-[#C89A4B]/40 px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.18em] uppercase text-[#E3BD73]"
                            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                            Collaborative StudyRoom Scheduler
                        </span>

                        <h1 className="hero-rise hero-rise-2 mt-7 text-5xl md:text-6xl leading-[1.08] text-[#F7F3EA]"
                            style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}>
                            Every room,
                            <span className="block italic text-[#E3BD73]" style={{ fontWeight: 500 }}>
                                accounted for.
                            </span>
                        </h1>

                        <p className="hero-rise hero-rise-3 mt-6 text-lg leading-8 text-[#AEB9D1]">
                            Reserve classrooms, labs, and seminar halls with a live
                            view of what's open — no double-bookings, no waiting on
                            an office to confirm. Approved the moment you book.
                        </p>

                        {/* Buttons */}
                        <div className="hero-rise hero-rise-3 mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                to="/register"
                                className="bg-[#C89A4B] text-[#1A1206] px-8 py-4 rounded-lg font-semibold hover:bg-[#E3BD73] transition-colors flex items-center justify-center gap-2"
                            >
                                Get started
                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                to="/login"
                                className="border border-[#F7F3EA]/25 px-8 py-4 rounded-lg hover:border-[#F7F3EA]/60 hover:bg-white/5 transition-colors font-semibold"
                            >
                                Sign in
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="hero-rise hero-rise-4 mt-14 grid grid-cols-3 gap-6 border-t border-[#F7F3EA]/10 pt-8">
                            {[
                                { value: "100+", label: "Rooms" },
                                { value: "2,000+", label: "Students" },
                                { value: "5,000+", label: "Bookings" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <h2
                                        className="text-2xl md:text-3xl text-[#F7F3EA]"
                                        style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
                                    >
                                        {stat.value}
                                    </h2>
                                    <p className="mt-1.5 text-xs uppercase tracking-widest text-[#8C9AB5]">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content — signature "door panel" schedule display */}
                    <div className="hero-rise hero-rise-2 flex-1 flex justify-center">
                        <div className="relative">

                            <div className="bg-[#F7F3EA] text-[#1E2436] rounded-2xl shadow-2xl shadow-black/40 p-7 w-[340px] border border-black/5">

                                <div className="flex items-center gap-3 pb-5 border-b border-black/10">
                                    <div className="bg-[#0E1830] p-2.5 rounded-lg text-[#E3BD73]">
                                        <Building2 size={22} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-1.5">
                                            <Circle size={7} className="hero-pulse fill-[#4C7A5E] text-[#4C7A5E]" />
                                            <span
                                                className="text-[10px] uppercase tracking-[0.2em] text-[#4C7A5E]"
                                                style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
                                            >
                                                Live
                                            </span>
                                        </div>
                                        <h3 className="font-semibold text-[#1E2436] leading-tight mt-0.5">
                                            A-101 · Computer Lab
                                        </h3>
                                    </div>
                                </div>

                                <p className="mt-4 text-xs uppercase tracking-widest text-[#8A8A78]">
                                    Engineering Block · 40 seats
                                </p>

                                {/* Schedule strip */}
                                <div className="mt-4 space-y-1.5">
                                    {SCHEDULE.map((slot) => (
                                        <div
                                            key={slot.time}
                                            className={`flex items-center gap-3 rounded-md px-2.5 py-2 ${
                                                slot.now
                                                    ? "bg-[#C89A4B]/12 border-l-2 border-[#C89A4B]"
                                                    : ""
                                            }`}
                                        >
                                            <span
                                                className="w-12 text-xs text-[#6B6B5E]"
                                                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                                            >
                                                {slot.time}
                                            </span>
                                            <span
                                                className={`h-2 flex-1 rounded-full ${
                                                    slot.status === "booked"
                                                        ? "bg-[#B2543A]/70"
                                                        : "bg-[#4C7A5E]/25"
                                                }`}
                                            />
                                            <span
                                                className={`w-14 text-right text-[10px] uppercase tracking-wide ${
                                                    slot.status === "booked" ? "text-[#B2543A]" : "text-[#4C7A5E]"
                                                }`}
                                                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                                            >
                                                {slot.now ? "now" : slot.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <button className="mt-5 w-full bg-[#0E1830] text-[#F7F3EA] rounded-lg py-3 text-sm font-semibold hover:bg-[#182548] transition-colors">
                                    Reserve this slot
                                </button>
                            </div>

                            {/* Floating success badge */}
                            <div className="absolute -bottom-6 -left-6 bg-[#1E2436] rounded-xl shadow-xl shadow-black/30 px-5 py-3.5 flex items-center gap-3 border border-white/10">
                                <CheckCircle2 size={20} className="text-[#4C7A5E] shrink-0" />
                                <div>
                                    <p
                                        className="text-lg leading-none text-[#F7F3EA]"
                                        style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
                                    >
                                        98%
                                    </p>
                                    <p className="text-[10px] uppercase tracking-wide text-[#8C9AB5] mt-1">
                                        Booking success
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;