import {
    Building2,
    CalendarCheck,
    Clock3,
    CheckCircle2,
} from "lucide-react";

import StatCard from "./StatCard";

const StatsGrid = () => {

    const stats = [
        {
            id: 1,
            title: "Available Rooms",
            value: "24",
            subtitle: "Ready to book",
            icon: Building2,
            color: "#F2B441",
        },
        {
            id: 2,
            title: "My Bookings",
            value: "08",
            subtitle: "This semester",
            icon: CalendarCheck,
            color: "#4ADE80",
        },
        {
            id: 3,
            title: "Upcoming",
            value: "03",
            subtitle: "Today's reservations",
            icon: Clock3,
            color: "#60A5FA",
        },
        {
            id: 4,
            title: "Completed",
            value: "16",
            subtitle: "Successfully attended",
            icon: CheckCircle2,
            color: "#A78BFA",
        },
    ];

    return (

        <section className="mt-8">

            <div className="mb-6">

                <h2 className="text-2xl font-bold text-white">

                    Dashboard Overview

                </h2>

                <p className="mt-2 text-gray-400">

                    A quick overview of your room booking activities.

                </p>

            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

                {stats.map((stat) => (

                    <StatCard
                        key={stat.id}
                        title={stat.title}
                        value={stat.value}
                        subtitle={stat.subtitle}
                        icon={stat.icon}
                        color={stat.color}
                    />

                ))}

            </div>

        </section>

    );

};

export default StatsGrid;