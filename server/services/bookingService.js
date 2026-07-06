const supabase = require("../config/db");

/* =========================================
   Create Booking
========================================= */

const createBooking = async (bookingData) => {

    const { data, error } = await supabase
        .from("bookings")
        .insert([bookingData])
        .select("id")
        .single();

    if (error) throw error;

    return await getBookingById(data.id);

};

/* =========================================
   Get User Bookings
========================================= */

const getUserBookings = async (userId) => {

    const { data, error } = await supabase
        .from("bookings")
        .select(`
            id,
            booking_date,
            start_time,
            end_time,
            purpose,
            notes,
            booking_type,
            status,
            created_at,
            updated_at,
            room:rooms(
                id,
                room_name,
                room_number,
                room_type,
                building,
                floor,
                capacity,
                image_url,
                status
            )
        `)
        .eq("user_id", userId)
        .order("created_at", {
            ascending: false,
        });

    if (error) throw error;

    return data;

};

/* =========================================
   Get Booking By ID
========================================= */

const getBookingById = async (bookingId) => {

    const { data, error } = await supabase
        .from("bookings")
        .select(`
            *,
            room:rooms(
                id,
                room_name,
                room_number,
                room_type,
                building,
                floor,
                capacity,
                description,
                image_url,
                opening_time,
                closing_time,
                status
            )
        `)
        .eq("id", bookingId)
        .single();

    if (error) throw error;

    return data;

};

/* =========================================
   Cancel Booking
========================================= */

const cancelBooking = async (bookingId, userId) => {

    const { error } = await supabase
        .from("bookings")
        .update({
            status: "cancelled",
            updated_at: new Date().toISOString(),
        })
        .eq("id", bookingId)
        .eq("user_id", userId);

    if (error) throw error;

    return await getBookingById(bookingId);

};

/* =========================================
   Update Booking Status
========================================= */

const updateBookingStatus = async (bookingId, status) => {

    const updateData = {
        status,
        updated_at: new Date().toISOString(),
    };

    if (status === "approved") {
        updateData.approved_at = new Date().toISOString();
    }

    const { error } = await supabase
        .from("bookings")
        .update(updateData)
        .eq("id", bookingId);

    if (error) throw error;

    return await getBookingById(bookingId);

};

const getAllBookings = async () => {

    const { data, error } = await supabase
        .from("bookings")
        .select(`
            id,
            booking_date,
            start_time,
            end_time,
            purpose,
            notes,
            booking_type,
            status,
            created_at,

            user:users(
                id,
                full_name,
                email
            ),

            room:rooms(
                id,
                room_name,
                room_number,
                building
            )
        `)
        .order("created_at", {
            ascending: false,
        });

    if (error) {
        throw error;
    }

    return data;
};

module.exports = {
    createBooking,
    getUserBookings,
    getBookingById,
    cancelBooking,
    updateBookingStatus,
    getAllBookings,
};