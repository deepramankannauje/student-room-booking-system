import {
    CalendarCheck,
    Building2,
    ShieldCheck,
    BarChart3,
    ArrowRight,
} from "lucide-react";

const features = [
    {
        id: 1,
        icon: CalendarCheck,
        title: "Easy room booking",
        description:
            "Reserve classrooms, laboratories, seminar halls, and meeting rooms in a few clicks with a booking flow that gets out of your way.",
    },
    {
        id: 2,
        icon: Building2,
        title: "Real-time availability",
        description:
            "See live room status, capacity, and amenities before you book, so two people never end up holding the same slot.",
    },
    {
        id: 3,
        icon: ShieldCheck,
        title: "Secure by role",
        description:
            "Students, faculty, and administrators each see exactly what they need — nothing more, nothing they shouldn't.",
    },
    {
        id: 4,
        icon: BarChart3,
        title: "Admin dashboard",
        description:
            "Manage rooms, users, and bookings from one place, with usage analytics that show what's actually in demand.",
    },
];

const FeatureSection = () => {
    return (
        <section className="relative py-28 bg-[#FAF7EF] overflow-hidden">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;1,9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
                .fs-blueprint {
                    background-image: radial-gradient(circle at 1px 1px, rgba(20,33,61,0.06) 1px, transparent 0);
                    background-size: 26px 26px;
                }
            `}</style>

            <div className="fs-blueprint pointer-events-none absolute inset-0 opacity-70" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto">

                    <span
                        className="inline-flex items-center gap-2 border border-[#C89A4B]/50 px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.18em] uppercase text-[#8A6423]"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                        Features
                    </span>

                    <h2
                        className="mt-6 text-4xl md:text-5xl leading-[1.1] text-[#14213D]"
                        style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
                    >
                        Everything you need for
                        <span className="block italic text-[#A87C2E]" style={{ fontWeight: 500 }}>
                            smart room booking
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-[#4B5566] leading-8">
                        One platform for reservation, availability, access
                        control, and oversight — built so students book fast
                        and administrators stay in control.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.id}
                                className="group bg-white rounded-2xl p-8 border border-[#14213D]/8 hover:border-[#C89A4B]/50 hover:-translate-y-1.5 transition-all duration-300"
                                style={{ boxShadow: "0 1px 2px rgba(20,33,61,0.04)" }}
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-lg border border-[#14213D]/12 text-[#14213D] flex items-center justify-center group-hover:bg-[#14213D] group-hover:border-[#14213D] group-hover:text-[#E3BD73] transition-colors duration-300">
                                    <Icon size={26} strokeWidth={1.75} />
                                </div>

                                {/* Title */}
                                <h3 className="mt-6 text-lg font-semibold text-[#14213D]">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-3 text-[#5B6472] leading-7 text-[15px]">
                                    {feature.description}
                                </p>

                                {/* Read More */}
                                <button className="mt-6 flex items-center gap-2 text-[#A87C2E] font-semibold text-sm group-hover:gap-3 transition-all">
                                    Learn more
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="relative mt-20 bg-[#0E1830] rounded-3xl p-10 md:p-16 text-center text-[#F7F3EA] overflow-hidden">

                    <div className="fs-blueprint pointer-events-none absolute inset-0 opacity-30" style={{ filter: "invert(1)" }} />

                    <div className="relative">
                        <h3
                            className="text-3xl md:text-4xl leading-tight"
                            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
                        >
                            Designed for modern universities
                        </h3>

                        <p className="mt-5 text-[#AEB9D1] max-w-2xl mx-auto leading-8">
                            Whether it's a lecture hall, a computer lab, or a
                            small meeting room — the reservation stays fast,
                            transparent, and conflict-free.
                        </p>

                        <button className="mt-9 bg-[#C89A4B] text-[#1A1206] px-8 py-4 rounded-lg font-semibold hover:bg-[#E3BD73] transition-colors inline-flex items-center gap-2">
                            Explore all features
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeatureSection;