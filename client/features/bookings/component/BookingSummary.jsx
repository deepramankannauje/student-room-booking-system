import {
    Building2,
    MapPin,
    Users,
    Clock3,
    Layers,
    MonitorSmartphone,
    Wifi,
    ShieldCheck,
} from "lucide-react";

const BookingSummary = ({ room }) => {

    if (!room) {
        return (
            <div className="rounded-2xl border border-[#242833] bg-[#111319] p-8 text-center">
                <h2 className="text-xl font-semibold text-white">
                    Room not found
                </h2>
            </div>
        );
    }

    const statusColor = {
        available: "bg-green-500/15 text-green-400",
        occupied: "bg-red-500/15 text-red-400",
        maintenance: "bg-yellow-500/15 text-yellow-400",
    };

    return (
        <div className="rounded-2xl border border-[#242833] bg-[#111319] p-8">

            {/* Header */}

            <div className="mb-8">

                <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F2B441]/10">

                        <Building2
                            size={28}
                            className="text-[#F2B441]"
                        />

                    </div>

                    <div>

                        <h2 className="text-2xl font-bold text-white">

                            {room.room_name}

                        </h2>

                        <p className="mt-1 text-gray-400">

                            Room {room.room_number} • {room.room_type}

                        </p>

                    </div>

                </div>

            </div>

            {/* Status */}

            <div
                className={`mb-8 inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ${
                    statusColor[room.status] ||
                    "bg-gray-500/15 text-gray-300"
                }`}
            >
                {room.status?.toUpperCase()}
            </div>

            {/* Information */}

            <div className="space-y-5">

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3 text-gray-400">

                        <MapPin size={18} />

                        Building

                    </div>

                    <span className="font-medium text-white">

                        {room.building}

                    </span>

                </div>

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3 text-gray-400">

                        <Layers size={18} />

                        Floor

                    </div>

                    <span className="font-medium text-white">

                        {room.floor}

                    </span>

                </div>

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3 text-gray-400">

                        <Users size={18} />

                        Capacity

                    </div>

                    <span className="font-medium text-white">

                        {room.capacity} Students

                    </span>

                </div>

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3 text-gray-400">

                        <Clock3 size={18} />

                        Available

                    </div>

                    <span className="font-medium text-green-400">

                        {room.opening_time} - {room.closing_time}

                    </span>

                </div>

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3 text-gray-400">

                        <MonitorSmartphone size={18} />

                        Projector

                    </div>

                    <span
                        className={
                            room.has_projector
                                ? "font-medium text-green-400"
                                : "font-medium text-red-400"
                        }
                    >
                        {room.has_projector ? "Available" : "Not Available"}
                    </span>

                </div>

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3 text-gray-400">

                        <Wifi size={18} />

                        Wi-Fi

                    </div>

                    <span
                        className={
                            room.has_wifi
                                ? "font-medium text-green-400"
                                : "font-medium text-red-400"
                        }
                    >
                        {room.has_wifi ? "Available" : "Not Available"}
                    </span>

                </div>

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3 text-gray-400">

                        <ShieldCheck size={18} />

                        AC

                    </div>

                    <span
                        className={
                            room.has_ac
                                ? "font-medium text-green-400"
                                : "font-medium text-red-400"
                        }
                    >
                        {room.has_ac ? "Available" : "Not Available"}
                    </span>

                </div>

            </div>

            {/* Description */}

            {room.description && (

                <div className="mt-8 border-t border-[#242833] pt-6">

                    <h3 className="mb-3 text-lg font-semibold text-white">

                        Description

                    </h3>

                    <p className="leading-7 text-gray-400">

                        {room.description}

                    </p>

                </div>

            )}

            {/* Room Image */}

            {room.image_url && (

                <div className="mt-8">

                    <img
                        src={room.image_url}
                        alt={room.room_name}
                        className="h-56 w-full rounded-xl object-cover"
                    />

                </div>

            )}

        </div>
    );
};

export default BookingSummary;