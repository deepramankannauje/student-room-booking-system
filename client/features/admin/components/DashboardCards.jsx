import {
    Building2,
    CalendarDays,
    Clock3,
    CheckCircle2,
    XCircle,
} from "lucide-react";

const DashboardCards = ({ stats, loading }) => {

    const cards = [
        {
            title: "Total Rooms",
            value: stats?.totalRooms ?? 0,
            icon: <Building2 size={30} />,
            color: "text-blue-400",
            bg: "bg-blue-500/10",
        },
        {
            title: "Total Bookings",
            value: stats?.totalBookings ?? 0,
            icon: <CalendarDays size={30} />,
            color: "text-yellow-400",
            bg: "bg-yellow-500/10",
        },
        {
            title: "Pending",
            value: stats?.pendingBookings ?? 0,
            icon: <Clock3 size={30} />,
            color: "text-orange-400",
            bg: "bg-orange-500/10",
        },
        {
            title: "Approved",
            value: stats?.approvedBookings ?? 0,
            icon: <CheckCircle2 size={30} />,
            color: "text-green-400",
            bg: "bg-green-500/10",
        },
        {
            title: "Rejected",
            value: stats?.rejectedBookings ?? 0,
            icon: <XCircle size={30} />,
            color: "text-red-400",
            bg: "bg-red-500/10",
        },
    ];

    return (

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">

            {cards.map((card) => (

                <div
                    key={card.title}
                    className="rounded-2xl border border-[#242833] bg-[#111319] p-6 transition hover:border-[#F2B441]"
                >

                    {loading ? (

                        <div className="animate-pulse">

                            <div className="mb-6 h-10 w-10 rounded-full bg-[#242833]" />

                            <div className="mb-3 h-4 w-24 rounded bg-[#242833]" />

                            <div className="h-8 w-16 rounded bg-[#242833]" />

                        </div>

                    ) : (

                        <>
                            <div
                                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${card.bg}`}
                            >
                                <span className={card.color}>
                                    {card.icon}
                                </span>
                            </div>

                            <p className="text-sm text-gray-400">

                                {card.title}

                            </p>

                            <h2 className="mt-2 text-4xl font-bold text-white">

                                {card.value}

                            </h2>
                        </>

                    )}

                </div>

            ))}

        </div>

    );

};

export default DashboardCards;