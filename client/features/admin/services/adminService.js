import api from "../../../src/services/api";

/* =========================================
   Dashboard
========================================= */

export const getDashboard  = async () => {
  const { data } = await api.get("/admin/dashboard");
  return data;
};

/* =========================================
   Bookings
========================================= */

export const getAllBookings = async () => {
  const { data } = await api.get("/admin/bookings");
  return data;
};

export const getBookingById = async (id) => {
  const { data } = await api.get(`/admin/bookings/${id}`);
  return data;
};

export const updateBookingStatus = async (
  bookingId,
  payload
) => {
  const { data } = await api.patch(
    `/admin/bookings/${bookingId}/status`,
    payload
  );

  return data;
};

export const deleteBooking = async (bookingId) => {
  const { data } = await api.delete(
    `/admin/bookings/${bookingId}`
  );

  return data;
};

/* =========================================
   Rooms
========================================= */

export const getRooms = async () => {
  const { data } = await api.get("/rooms");
  return data;
};

export const createRoom = async (roomData) => {
  const { data } = await api.post(
    "/admin/rooms",
    roomData
  );

  return data;
};

export const updateRoom = async (
  roomId,
  roomData
) => {
  const { data } = await api.patch(
    `/admin/rooms/${roomId}`,
    roomData
  );

  return data;
};

export const deleteRoom = async (roomId) => {
  const { data } = await api.delete(
    `/admin/rooms/${roomId}`
  );

  return data;
};

/* =========================================
   Users
========================================= */

export const getUsers = async () => {
  const { data } = await api.get("/admin/users");
  return data;
};