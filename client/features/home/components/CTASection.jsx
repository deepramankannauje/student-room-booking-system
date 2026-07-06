import { Link } from "react-router-dom";
import {
    ArrowRight,
    CalendarCheck,
    ShieldCheck,
    Building2,
} from "lucide-react";

const highlights = [
    {
        icon: Building2,
        title: "Smart room management",
        description:
            "Classrooms, laboratories, seminar halls, and meeting rooms, all handled in one place.",
    },
    {
        icon: CalendarCheck,
        title: "Real-time booking",
        description:
            "Check availability and schedule instantly — conflicts are avoided automatically, not sorted out after the fact.",
    },
    {
        icon: ShieldCheck,
        title: "Secure by design",
        description:
            "Role-based access keeps every login verified and every booking accountable.",
    },
];

const CTASection = () => {
    return (
        <section className="py-24 bg-[#FAF7EF]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
            `}</style>

            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="relative overflow-hidden rounded-3xl bg-[#0E1830]">

                    {/* Background decoration */}
                    <div
                        className="pointer-events-none absolute inset-0 opacity-60"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at 1px 1px, rgba(200,154,75,0.16) 1px, transparent 0)",
                            backgroundSize: "28px 28px",
                        }}
                    />
                    <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 bg-[#C89A4B]/10 rounded-full blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 bg-[#C89A4B]/8 rounded-full blur-3xl" />

                    <div className="relative z-10 px-8 py-16 md:px-16 lg:px-20">

                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                            {/* Left */}
                            <div>
                                <span
                                    className="inline-flex items-center gap-2 rounded-full border border-[#C89A4B]/40 px-4 py-1.5 text-xs font-medium tracking-[0.18em] uppercase text-[#E3BD73]"
                                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                                >
                                    <CalendarCheck size={15} />
                                    Start booking today
                                </span>

                                <h2
                                    className="mt-6 text-4xl md:text-5xl leading-[1.1] text-[#F7F3EA]"
                                    style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
                                >
                                    Simplify your
                                    <span className="block italic text-[#E3BD73]" style={{ fontWeight: 500 }}>
                                        campus room booking
                                    </span>
                                </h2>

                                <p className="mt-6 text-lg leading-8 text-[#AEB9D1]">
                                    Join thousands of students and faculty
                                    reserving classrooms, laboratories, and
                                    meeting rooms with live availability and
                                    instant confirmation.
                                </p>

                                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                    <Link
                                        to="/register"
                                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#C89A4B] px-8 py-4 font-semibold text-[#1A1206] transition-colors hover:bg-[#E3BD73]"
                                    >
                                        Get started
                                        <ArrowRight size={18} />
                                    </Link>

                                    <Link
                                        to="/login"
                                        className="inline-flex items-center justify-center rounded-lg border border-white/25 px-8 py-4 font-semibold text-[#F7F3EA] transition-colors hover:border-white/60 hover:bg-white/5"
                                    >
                                        Sign in
                                    </Link>
                                </div>
                            </div>

                            {/* Right */}
                            <div className="grid gap-4">

                                {highlights.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.title}
                                            className="flex items-start gap-4 rounded-2xl bg-white/[0.04] border border-white/10 p-6"
                                        >
                                            <div className="rounded-lg border border-[#C89A4B]/30 p-3 shrink-0">
                                                <Icon size={24} strokeWidth={1.75} className="text-[#E3BD73]" />
                                            </div>

                                            <div>
                                                <h3 className="text-lg font-semibold text-[#F7F3EA]">
                                                    {item.title}
                                                </h3>
                                                <p className="mt-2 text-[#AEB9D1] leading-7 text-[15px]">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default CTASection;