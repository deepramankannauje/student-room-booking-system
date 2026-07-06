import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Building2, Users, MapPin } from "lucide-react";

const statusStyles = {
  available: "bg-green-500/15 text-green-400",
  occupied: "bg-red-500/15 text-red-400",
  maintenance: "bg-yellow-500/15 text-yellow-400",
};

const RoomCard = ({ room, onViewDetails }) => {
  const navigate = useNavigate();

  const roomStatus = room.status?.toLowerCase() || "occupied";
  const isAvailable = roomStatus === "available";

  const bookLabel = isAvailable
    ? "Book Room"
    : roomStatus === "maintenance"
    ? "Maintenance"
    : "Unavailable";

  const handleBook = () => {
    if (!isAvailable || !room.id) return;
    navigate(`/booking/${room.id}`, { state: { room } });
  };

  const handleDetails = () => {
    if (onViewDetails) {
      onViewDetails(room);
      return;
    }
    if (!room.id) return;
    navigate(`/rooms/${room.id}`, { state: { room } });
  };

  return (
    <div className="group rounded-2xl border border-[#242833] bg-[#111319] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F2B441] hover:shadow-xl hover:shadow-[#F2B441]/5">
      {/* Header */}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#F2B441]/10 transition-colors duration-300 group-hover:bg-[#F2B441]/15">
            <Building2 size={28} className="text-[#F2B441]" />
          </div>

          <div className="min-w-0">
            <h2 className="break-words text-2xl font-bold leading-snug text-white">
              {room.room_name}
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              Room {room.room_number} • {room.room_type}
            </p>
          </div>
        </div>

        <span
          role="status"
          className={`inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold capitalize sm:mt-0.5 ${
            statusStyles[roomStatus] || statusStyles.occupied
          }`}
        >
          <span
            className={`h-1.5 w-1.5 shrink-0 rounded-full ${
              isAvailable
                ? "bg-green-400"
                : roomStatus === "maintenance"
                ? "bg-yellow-400"
                : "bg-red-400"
            }`}
          />
          {room.status}
        </span>
      </div>

      {/* Quick Info */}

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="min-w-0 rounded-xl border border-[#242833] bg-[#08090D] p-4">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Users size={14} className="shrink-0" />
            Capacity
          </div>

          <p className="mt-2 truncate text-lg font-semibold text-white">
            {room.capacity} {room.capacity === 1 ? "Student" : "Students"}
          </p>
        </div>

        <div className="min-w-0 rounded-xl border border-[#242833] bg-[#08090D] p-4">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <MapPin size={14} className="shrink-0" />
            Building
          </div>

          <p
            title={room.building}
            className="mt-2 truncate text-lg font-semibold text-white"
          >
            {room.building}
          </p>
        </div>
      </div>

      {/* Description */}

      {room.description && (
        <p className="mt-6 line-clamp-2 text-sm leading-6 text-gray-400">
          {room.description}
        </p>
      )}

      {/* Footer */}

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={handleBook}
          disabled={!isAvailable}
          aria-disabled={!isAvailable}
          className="flex-1 rounded-xl bg-[#F2B441] py-3 font-semibold text-[#1A1206] transition hover:bg-[#F5C468] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B441] disabled:cursor-not-allowed disabled:bg-[#F2B441]/30 disabled:text-[#1A1206]/50"
        >
          {bookLabel}
        </button>

        <button
          type="button"
          onClick={handleDetails}
          className="flex-1 rounded-xl border border-[#242833] py-3 font-semibold text-white transition hover:border-[#F2B441] hover:text-[#F2B441] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B441]"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default memo(RoomCard);