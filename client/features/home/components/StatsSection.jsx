import {
    Building2,
    Users,
    CalendarDays,
    CheckCircle2,
} from "lucide-react";

const stats = [
    {
        id: 1,
        icon: Building2,
        value: "120+",
        title: "Available rooms",
        description:
            "Classrooms, seminar halls, laboratories, and meeting rooms across campus.",
    },
    {
        id: 2,
        icon: Users,
        value: "2,500+",
        title: "Registered students",
        description:
            "Actively booking academic spaces through the platform every semester.",
    },
    {
        id: 3,
        icon: CalendarDays,
        value: "8,000+",
        title: "Successful bookings",
        description:
            "Reservations completed with real-time scheduling and instant approval.",
    },
    {
        id: 4,
        icon: CheckCircle2,
        value: "98%",
        title: "Success rate",
        description:
            "A reliable workflow with minimal conflicts and fast turnaround.",
    },
];

const summary = [
    { value: "24/7", label: "Room availability monitoring" },
    { value: "100%", label: "Secure, role-based access" },
    { value: "Real-time", label: "Booking and availability updates" },
];

const StatsSection = () => {
    return (
        <section className="relative py-28 bg-[#0E1830] text-[#F7F3EA] overflow-hidden">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;1,9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
            `}</style>

            <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, rgba(200,154,75,0.16) 1px, transparent 0)",
                    backgroundSize: "28px 28px",
                }}
            />
            <div className="pointer-events-none absolute -bottom-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-[#C89A4B]/8 blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto">

                    <span
                        className="inline-flex items-center gap-2 border border-[#C89A4B]/40 px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.18em] uppercase text-[#E3BD73]"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                        Platform statistics
                    </span>

                    <h2
                        className="mt-6 text-4xl md:text-5xl leading-[1.1] text-[#F7F3EA]"
                        style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
                    >
                        Trusted by
                        <span className="block italic text-[#E3BD73]" style={{ fontWeight: 500 }}>
                            thousands of students
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-[#AEB9D1] leading-8">
                        Built to help universities manage room reservations
                        at scale, without making students wait on an answer.
                    </p>
                </div>

                {/* Statistics Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

                    {stats.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={stat.id}
                                className="group bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-[#C89A4B]/40 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1.5"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-lg border border-[#C89A4B]/30 text-[#E3BD73] flex items-center justify-center mb-7">
                                    <Icon size={26} strokeWidth={1.75} />
                                </div>

                                {/* Value */}
                                <h3
                                    className="text-4xl text-[#F7F3EA]"
                                    style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
                                >
                                    {stat.value}
                                </h3>

                                {/* Title */}
                                <h4 className="mt-4 text-lg font-semibold text-[#F7F3EA]">
                                    {stat.title}
                                </h4>

                                {/* Description */}
                                <p className="mt-3 text-[#AEB9D1] leading-7 text-[15px]">
                                    {stat.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Summary */}
                <div className="mt-24 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-t border-b border-white/10">

                    {summary.map((item) => (
                        <div key={item.label} className="text-center py-8 px-4">
                            <h3
                                className="text-3xl text-[#E3BD73]"
                                style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
                            >
                                {item.value}
                            </h3>
                            <p className="mt-2 text-[#AEB9D1] text-sm uppercase tracking-widest">
                                {item.label}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default StatsSection;