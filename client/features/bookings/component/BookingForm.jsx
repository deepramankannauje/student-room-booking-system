import { useState } from "react";
import toast from "react-hot-toast";
import { createBooking } from "../services/bookingService";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ room, onSubmit }) => {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    booking_date: "",
    start_time: "",
    end_time: "",
    purpose: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.start_time >= formData.end_time) {
        toast.error("End time must be later than start time.");
        return;
    }

    try {
        const bookingData = {
            room_id: room.id,
            booking_date: formData.booking_date,
            start_time: formData.start_time,
            end_time: formData.end_time,
            purpose: formData.purpose,
            notes: formData.notes,
        };

        const response = await createBooking(bookingData);

        toast.success(response.message);

        navigate("/my-bookings");

    } catch (error) {
        toast.error(
            error.response?.data?.message ||
            "Failed to create booking."
        );
    }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[#242833] bg-[#111319] p-8"
    >
      <h2 className="mb-8 text-3xl font-bold text-white">Book Room</h2>

      {/* Room Information */}

      <div className="mb-8 rounded-2xl border border-[#242833] bg-[#08090D] p-6">
        <h3 className="text-2xl font-bold text-white">{room.room_name}</h3>

        <p className="mt-1 text-gray-400">
          Room {room.room_number} • {room.room_type}
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500">
              Building
            </p>

            <p className="mt-1 font-semibold text-white">{room.building}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500">
              Floor
            </p>

            <p className="mt-1 font-semibold text-white">{room.floor}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500">
              Capacity
            </p>

            <p className="mt-1 font-semibold text-white">
              {room.capacity} Students
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500">
              Available Time
            </p>

            <p className="mt-1 font-semibold text-green-400">
              {room.opening_time} - {room.closing_time}
            </p>
          </div>
        </div>
      </div>

      {/* Booking Date */}

      <div className="mb-6">
        <label className="mb-2 block font-medium text-gray-300">
          Booking Date
        </label>

        <input
          type="date"
          name="booking_date"
          value={formData.booking_date}
          onChange={handleChange}
          required
          className="date-time-input w-full rounded-xl border border-[#242833] bg-[#08090D] p-3 text-white outline-none transition focus:border-[#F2B441]"
        />
      </div>

      {/* Time */}

      <div className="mb-6 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium text-gray-300">
            Start Time
          </label>

          <input
            type="time"
            name="start_time"
            value={formData.start_time}
            onChange={handleChange}
            min={room.opening_time}
            max={room.closing_time}
            required
            className="date-time-input w-full rounded-xl border border-[#242833] bg-[#08090D] p-3 text-white outline-none transition focus:border-[#F2B441]"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-300">
            End Time
          </label>

          <input
            type="time"
            name="end_time"
            value={formData.end_time}
            onChange={handleChange}
            min={room.opening_time}
            max={room.closing_time}
            required
            className="date-time-input w-full rounded-xl border border-[#242833] bg-[#08090D] p-3 text-white outline-none transition focus:border-[#F2B441]"
          />
        </div>
      </div>

      {/* Purpose */}

      <div className="mb-6">
        <label className="mb-2 block font-medium text-gray-300">
          Purpose of Booking
        </label>

        <textarea
          rows={4}
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          required
          placeholder="Example: Study Session, Project Discussion, Club Meeting..."
          className="w-full rounded-xl border border-[#242833] bg-[#08090D] p-3 text-white outline-none transition focus:border-[#F2B441]"
        />
      </div>

      {/* Notes */}

      <div className="mb-8">
        <label className="mb-2 block font-medium text-gray-300">
          Additional Notes (Optional)
        </label>

        <textarea
          rows={3}
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Projector required, Whiteboard required, etc."
          className="w-full rounded-xl border border-[#242833] bg-[#08090D] p-3 text-white outline-none transition focus:border-[#F2B441]"
        />
      </div>

      <button
        type="submit"
        disabled={room.status !== "available"}
        className="w-full rounded-xl bg-[#F2B441] py-3 text-lg font-semibold text-[#1A1206] transition hover:bg-[#F5C468] disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-300"
      >
        {room.status === "available" ? "Confirm Booking" : "Room Not Available"}
      </button>
    </form>
  );
};

export default BookingForm;
