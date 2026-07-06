import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { createRoom } from "../services/adminService";

const CreateRoomForm = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

 const [formData, setFormData] = useState({
  room_number: "",
  room_name: "",
  room_type: "Classroom",
  building: "",
  floor: "",
  capacity: "",
  department: "",
  opening_time: "09:00",
  closing_time: "17:00",
  description: "",
  image_url: "",
  status: "available",

  has_projector: false,
  has_wifi: true,
  has_ac: false,
  has_whiteboard: false,
});

  const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      Number(formData.capacity) <= 0
    ) {
      return toast.error(
        "Capacity must be greater than 0."
      );
    }

    if (
      formData.opening_time >=
      formData.closing_time
    ) {
      return toast.error(
        "Closing time must be after opening time."
      );
    }

    try {
      setLoading(true);

      await createRoom({
        ...formData,
        capacity: Number(formData.capacity),
      });

      toast.success(
        "Room created successfully."
      );

      navigate("/admin");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to create room."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[#242833] bg-[#111319] p-8"
    >
      <h2 className="mb-8 text-3xl font-bold text-white">
        Create New Room
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Room Number
          </label>

          <input
            type="text"
            name="room_number"
            value={formData.room_number}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-[#242833] bg-[#08090D] p-3 text-white outline-none focus:border-[#F2B441]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Room Name
          </label>

          <input
            type="text"
            name="room_name"
            value={formData.room_name}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-[#242833] bg-[#08090D] p-3 text-white outline-none focus:border-[#F2B441]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Room Type
          </label>

          <select
            name="room_type"
            value={formData.room_type}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#242833] bg-[#08090D] p-3 text-white outline-none focus:border-[#F2B441]"
          >
            <option>Classroom</option>
            <option>Lab</option>
            <option>Seminar Hall</option>
            <option>Conference Room</option>
            <option>Library</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Building
          </label>

          <input
            type="text"
            name="building"
            value={formData.building}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-[#242833] bg-[#08090D] p-3 text-white outline-none focus:border-[#F2B441]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Floor
          </label>

          <input
            type="text"
            name="floor"
            value={formData.floor}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-[#242833] bg-[#08090D] p-3 text-white outline-none focus:border-[#F2B441]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Capacity
          </label>

          <input
            type="number"
            name="capacity"
            min="1"
            value={formData.capacity}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-[#242833] bg-[#08090D] p-3 text-white outline-none focus:border-[#F2B441]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Opening Time
          </label>

          <input
            type="time"
            name="opening_time"
            value={formData.opening_time}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-[#242833] bg-[#08090D] p-3 text-white outline-none focus:border-[#F2B441]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Closing Time
          </label>

          <input
            type="time"
            name="closing_time"
            value={formData.closing_time}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-[#242833] bg-[#08090D] p-3 text-white outline-none focus:border-[#F2B441]"
          />
        </div>

        <div>
  <label className="mb-2 block text-sm font-medium text-gray-300">
    Department
  </label>

  <input
    type="text"
    name="department"
    value={formData.department}
    onChange={handleChange}
    required
    className="w-full rounded-xl border border-[#242833] bg-[#08090D] p-3 text-white outline-none focus:border-[#F2B441]"
  />
</div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Image URL
          </label>

          <input
            type="url"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            placeholder="https://..."
            className="w-full rounded-xl border border-[#242833] bg-[#08090D] p-3 text-white outline-none focus:border-[#F2B441]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Description
          </label>

          <textarea
            rows={5}
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#242833] bg-[#08090D] p-3 text-white outline-none focus:border-[#F2B441]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Status
          </label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#242833] bg-[#08090D] p-3 text-white outline-none focus:border-[#F2B441]"
          >
            <option value="available">
              Available
            </option>

            <option value="maintenance">
              Maintenance
            </option>

            <option value="inactive">
              Inactive
            </option>
          </select>
        </div>
      </div>

      <div className="mt-8 flex justify-end gap-4">
        <button
          type="button"
          onClick={() =>
            navigate("/admin")
          }
          className="rounded-xl border border-[#242833] px-6 py-3 text-white transition hover:bg-[#181B22]"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-[#F2B441] px-8 py-3 font-semibold text-[#1A1206] transition hover:bg-[#F5C468] disabled:opacity-50"
        >
          {loading
            ? "Creating..."
            : "Create Room"}
        </button>
      </div>
    </form>
  );
};

export default CreateRoomForm;