import {
    CalendarCheck,
    Clock3,
    CheckCircle2,
    XCircle,
} from "lucide-react";

const RecentActivity = () => {

    const activities = [
        {
            id: 1,
            title: "Booked Computer Lab A-204",
            description: "Tomorrow • 10:00 AM - 12:00 PM",
            status: "Upcoming",
            icon: CalendarCheck,
            color: "#F2B441",
        },
        {
            id: 2,
            title: "Reservation Completed",
            description: "Seminar Hall • Yesterday",
            status: "Completed",
            icon: CheckCircle2,
            color: "#4ADE80",
        },
        {
            id: 3,
            title: "Booking Cancelled",
            description: "Meeting Room • Last Week",
            status: "Cancelled",
            icon: XCircle,
            color: "#EF4444",
        },
        {
            id: 4,
            title: "Upcoming Study Session",
            description: "Library Room • Friday 02:00 PM",
            status: "Scheduled",
            icon: Clock3,
            color: "#60A5FA",
        },
    ];

    return (

        <section className="mt-10">

            <div className="mb-6 flex items-center justify-between">

                <div>

                    <h2 className="text-2xl font-bold text-white">

                        Recent Activity

                    </h2>

                    <p className="mt-1 text-gray-400">

                        Your latest room booking activity.

                    </p>

                </div>

            </div>

            <div className="rounded-2xl border border-[#242833] bg-[#111319]">

                {activities.map((activity, index) => {

                    const Icon = activity.icon;

                    return (

                        <div
                            key={activity.id}
                            className={`flex items-center justify-between p-6 ${
                                index !== activities.length - 1
                                    ? "border-b border-[#242833]"
                                    : ""
                            }`}
                        >

                            <div className="flex items-center gap-4">

                                <div
                                    className="rounded-xl p-3"
                                    style={{
                                        backgroundColor: `${activity.color}15`,
                                    }}
                                >

                                    <Icon
                                        size={22}
                                        style={{
                                            color: activity.color,
                                        }}
                                    />

                                </div>

                                <div>

                                    <h3 className="font-semibold text-white">

                                        {activity.title}

                                    </h3>

                                    <p className="mt-1 text-sm text-gray-400">

                                        {activity.description}

                                    </p>

                                </div>

                            </div>

                            <span
                                className="rounded-full px-4 py-2 text-sm font-medium"
                                style={{
                                    backgroundColor: `${activity.color}15`,
                                    color: activity.color,
                                }}
                            >

                                {activity.status}

                            </span>

                        </div>

                    );

                })}

            </div>

        </section>

    );

};

export default RecentActivity;