import { useState } from "react";
import toast from "react-hot-toast";

import { updateBookingStatus } from "../services/adminService";

const BookingTable = ({
  bookings = [],
  loading,
  refreshBookings,
}) => {
  const [processingId, setProcessingId] = useState(null);

  const handleStatusChange = async (
    bookingId,
    status
  ) => {
    try {
      setProcessingId(bookingId);

      await updateBookingStatus(bookingId, {
        status,
      });

      toast.success(
        `Booking ${status} successfully.`
      );

      if (refreshBookings) {
        await refreshBookings();
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to update booking."
      );
    } finally {
      setProcessingId(null);
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/20 text-yellow-400";

      case "approved":
        return "bg-green-500/20 text-green-400";

      case "completed":
        return "bg-blue-500/20 text-blue-400";

      case "rejected":
        return "bg-red-500/20 text-red-400";

      case "cancelled":
        return "bg-gray-500/20 text-gray-400";

      default:
        return "bg-purple-500/20 text-purple-400";
    }
  };

  if (loading) {
    return (
      <div className="rounded-2xl border border-[#242833] bg-[#111319] p-10 text-center text-gray-400">
        Loading bookings...
      </div>
    );
  }

  if (!bookings.length) {
    return (
      <div className="rounded-2xl border border-[#242833] bg-[#111319] p-10 text-center text-gray-400">
        No bookings found.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#242833] bg-[#111319]">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-[#181B22]">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                Student
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                Room
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                Date
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                Time
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                Purpose
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">
                Status
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-t border-[#242833] hover:bg-[#181B22]"
              >
                {/* Student */}
                <td className="px-6 py-5">
                  <p className="font-semibold text-white">
                    {booking.user?.full_name ||
                      booking.user?.name ||
                      "Unknown Student"}
                  </p>

                  <p className="text-sm text-gray-400">
                    {booking.user?.email}
                  </p>
                </td>

                {/* Room */}
                <td className="px-6 py-5">
                  <p className="font-semibold text-white">
                    {booking.room?.room_name}
                  </p>

                  <p className="text-sm text-gray-400">
                    {booking.room?.room_number}
                  </p>
                </td>

                {/* Date */}
                <td className="px-6 py-5 text-gray-300">
                  {booking.booking_date}
                </td>

                {/* Time */}
                <td className="px-6 py-5 text-gray-300">
                  {booking.start_time} -{" "}
                  {booking.end_time}
                </td>

                {/* Purpose */}
                <td className="px-6 py-5 text-gray-300">
                  {booking.purpose}
                </td>

                {/* Status */}
                <td className="px-6 py-5 text-center">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                      booking.status
                    )}`}
                  >
                    {booking.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-5">
                  <div className="flex flex-wrap justify-center gap-2">

                    {/* Pending */}
                    {booking.status === "pending" && (
                      <>
                        <button
                          disabled={
                            processingId ===
                            booking.id
                          }
                          onClick={() =>
                            handleStatusChange(
                              booking.id,
                              "approved"
                            )
                          }
                          className="rounded-lg bg-green-600 px-3 py-1 text-sm text-white transition hover:bg-green-700 disabled:opacity-50"
                        >
                          Approve
                        </button>

                        <button
                          disabled={
                            processingId ===
                            booking.id
                          }
                          onClick={() =>
                            handleStatusChange(
                              booking.id,
                              "rejected"
                            )
                          }
                          className="rounded-lg bg-red-600 px-3 py-1 text-sm text-white transition hover:bg-red-700 disabled:opacity-50"
                        >
                          Reject
                        </button>

                        <button
                          disabled={
                            processingId ===
                            booking.id
                          }
                          onClick={() =>
                            handleStatusChange(
                              booking.id,
                              "cancelled"
                            )
                          }
                          className="rounded-lg bg-gray-600 px-3 py-1 text-sm text-white transition hover:bg-gray-700 disabled:opacity-50"
                        >
                          Cancel
                        </button>
                      </>
                    )}

                    {/* Approved */}
                    {booking.status ===
                      "approved" && (
                      <>
                        <button
                          disabled={
                            processingId ===
                            booking.id
                          }
                          onClick={() =>
                            handleStatusChange(
                              booking.id,
                              "completed"
                            )
                          }
                          className="rounded-lg bg-blue-600 px-3 py-1 text-sm text-white transition hover:bg-blue-700 disabled:opacity-50"
                        >
                          Complete
                        </button>

                        <button
                          disabled={
                            processingId ===
                            booking.id
                          }
                          onClick={() =>
                            handleStatusChange(
                              booking.id,
                              "cancelled"
                            )
                          }
                          className="rounded-lg bg-gray-600 px-3 py-1 text-sm text-white transition hover:bg-gray-700 disabled:opacity-50"
                        >
                          Cancel
                        </button>
                      </>
                    )}

                    {/* Completed */}
                    {booking.status ===
                      "completed" && (
                      <span className="text-sm text-green-400 font-medium">
                        Completed
                      </span>
                    )}

                    {/* Rejected */}
                    {booking.status ===
                      "rejected" && (
                      <span className="text-sm text-red-400 font-medium">
                        Rejected
                      </span>
                    )}

                    {/* Cancelled */}
                    {booking.status ===
                      "cancelled" && (
                      <span className="text-sm text-gray-400 font-medium">
                        Cancelled
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingTable;