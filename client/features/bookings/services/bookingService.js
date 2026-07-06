import api from "../../../src/services/api";

export const createBooking = async (bookingData) => {
    const { data } = await api.post("/bookings", bookingData);
    return data;
};

export const getMyBookings = async () => {
    const { data } = await api.get("/bookings/my-bookings");
    return data;
};

export const getBookingById = async (id) => {
    const { data } = await api.get(`/bookings/${id}`);
    return data;
};

export const cancelBooking = async (id) => {
    const { data } = await api.patch(`/bookings/${id}/cancel`);
    return data;
};