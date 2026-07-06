import {
    UserPlus,
    Search,
    CalendarCheck,
    BadgeCheck,
    ArrowRight,
} from "lucide-react";

const steps = [
    {
        id: "01",
        icon: UserPlus,
        title: "Create an account",
        description:
            "Register with your university email or student ID to get secure access to the booking system.",
    },
    {
        id: "02",
        icon: Search,
        title: "Find a room",
        description:
            "Browse classrooms, labs, seminar halls, and meeting rooms with real-time availability.",
    },
    {
        id: "03",
        icon: CalendarCheck,
        title: "Book your slot",
        description:
            "Pick a date and time, then submit your request in a few clicks — no forms to print.",
    },
    {
        id: "04",
        icon: BadgeCheck,
        title: "Get confirmed",
        description:
            "Receive instant confirmation and manage every reservation from your dashboard.",
    },
];

const HowItWorks = () => {
    return (
        <section className="py-28 bg-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;1,9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
            `}</style>

            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">

                    <span
                        className="inline-flex items-center gap-2 border border-[#C89A4B]/50 px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.18em] uppercase text-[#8A6423]"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                        How it works
                    </span>

                    <h2
                        className="mt-6 text-4xl md:text-5xl leading-[1.1] text-[#14213D]"
                        style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
                    >
                        Book a room in
                        <span className="block italic text-[#A87C2E]" style={{ fontWeight: 500 }}>
                            four simple steps
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-[#4B5566] leading-8">
                        Fast, transparent, and hassle-free — from the first
                        search to a confirmed reservation.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative mt-20">

                    {/* Desktop connecting path */}
                    <div
                        className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-px z-0"
                        style={{
                            backgroundImage:
                                "repeating-linear-gradient(to right, #C89A4B 0, #C89A4B 6px, transparent 6px, transparent 14px)",
                        }}
                    />

                    <div className="grid lg:grid-cols-4 gap-x-8 gap-y-16 relative z-10">

                        {steps.map((step) => {
                            const Icon = step.icon;

                            return (
                                <div key={step.id} className="text-center group">

                                    {/* Icon */}
                                    <div className="relative flex justify-center">
                                        <div className="w-[72px] h-[72px] rounded-full bg-white border-2 border-[#14213D]/15 text-[#14213D] flex items-center justify-center group-hover:bg-[#14213D] group-hover:border-[#14213D] group-hover:text-[#E3BD73] transition-colors duration-300">
                                            <Icon size={30} strokeWidth={1.75} />
                                        </div>
                                    </div>

                                    {/* Step code */}
                                    <p
                                        className="mt-5 text-xs tracking-[0.2em] text-[#C89A4B]"
                                        style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
                                    >
                                        STEP {step.id}
                                    </p>

                                    {/* Content */}
                                    <h3 className="mt-2 text-xl font-semibold text-[#14213D]">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-[#5B6472] leading-7 text-[15px] max-w-[220px] mx-auto">
                                        {step.description}
                                    </p>

                                </div>
                            );
                        })}

                    </div>
                </div>

                {/* Bottom Card */}
                <div className="relative mt-24 bg-[#0E1830] rounded-3xl px-10 py-14 text-center overflow-hidden">

                    <div
                        className="pointer-events-none absolute inset-0 opacity-30"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at 1px 1px, rgba(200,154,75,0.35) 1px, transparent 0)",
                            backgroundSize: "26px 26px",
                        }}
                    />

                    <div className="relative">
                        <h3
                            className="text-3xl md:text-4xl text-[#F7F3EA]"
                            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
                        >
                            Simple. Fast. Reliable.
                        </h3>

                        <p className="mt-5 text-[#AEB9D1] max-w-3xl mx-auto leading-8">
                            From finding a room to getting confirmed, the
                            whole process takes minutes — so you can focus
                            on the class, not the paperwork.
                        </p>

                        <button className="mt-9 bg-[#C89A4B] hover:bg-[#E3BD73] transition-colors px-8 py-4 rounded-lg text-[#1A1206] font-semibold inline-flex items-center gap-2">
                            Start booking today
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HowItWorks;