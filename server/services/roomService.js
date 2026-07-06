const supabase = require("../config/db");

/* =========================================
   Helper Functions
========================================= */

const createError = (message, statusCode = 500) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    return error;
};

/* =========================================
   Get Room By ID
========================================= */

const getRoomById = async (id) => {
    const { data, error } = await supabase
        .from("rooms")
        .select("*")
        .eq("id", id)
        .maybeSingle();

    if (error) throw error;

    return data;
};

/* =========================================
   Check Duplicate Room Number
========================================= */

const roomNumberExists = async (
    roomNumber,
    excludeId = null
) => {
    let query = supabase
        .from("rooms")
        .select("id")
        .eq("room_number", roomNumber);

    if (excludeId) {
        query = query.neq("id", excludeId);
    }

    const { data, error } = await query.maybeSingle();

    if (error) throw error;

    return !!data;
};




/* =========================================
   Create Room
========================================= */

const createRoom = async (roomData) => {

    const exists = await roomNumberExists(
        roomData.room_number
    );

    if (exists) {
        throw createError(
            "Room number already exists.",
            409
        );
    }

    const payload = {
        room_number: roomData.room_number,
        room_name: roomData.room_name,
        room_type: roomData.room_type,
        building: roomData.building,
        floor: roomData.floor,
        capacity: Number(roomData.capacity),
        department: roomData.department,

        description: roomData.description || null,
        image_url: roomData.image_url || null,

        status: roomData.status || "available",

        opening_time: roomData.opening_time,
        closing_time: roomData.closing_time,

        has_projector: roomData.has_projector ?? false,
        has_wifi: roomData.has_wifi ?? true,
        has_ac: roomData.has_ac ?? false,
        has_whiteboard: roomData.has_whiteboard ?? false,
    };

    const { data, error } = await supabase
        .from("rooms")
        .insert(payload)
        .select()
        .single();

    if (error) throw error;

    return data;
};


/* =========================================
   Get All Rooms
========================================= */

const getAllRooms = async (queryParams) => {

    const {
        page = 1,
        limit = 10,
        search = "",
        building,
        floor,
        status,
        sort = "created_at",
        order = "desc",
    } = queryParams;

    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    const from = (pageNumber - 1) * limitNumber;
    const to = from + limitNumber - 1;

    let query = supabase
        .from("rooms")
        .select("*", {
            count: "exact",
        });

    if (search) {
        query = query.or(
            `room_number.ilike.%${search}%,
             room_name.ilike.%${search}%,
             room_type.ilike.%${search}%,
             building.ilike.%${search}%`
        );
    }

    if (building) {
        query = query.eq("building", building);
    }

    if (floor) {
        query = query.eq("floor", floor);
    }

    if (status) {
        query = query.eq("status", status);
    }

    query = query
        .order(sort, {
            ascending: order === "asc",
        })
        .range(from, to);

    const { data, error, count } = await query;

    if (error) throw error;

    return {
        total: count,
        page: pageNumber,
        limit: limitNumber,
        totalPages: Math.ceil(count / limitNumber),
        rooms: data,
    };
};

/* =========================================
   Check Active Bookings
========================================= */

const hasActiveBookings = async (roomId) => {

    const { data, error } = await supabase
        .from("bookings")
        .select("id")
        .eq("room_id", roomId)
        .in("status", [
            "pending",
            "approved",
            "confirmed",
        ]);

    if (error) throw error;

    return data.length > 0;
};

/* =========================================
   Update Room
========================================= */

const updateRoom = async (
    id,
    roomData
) => {

    const room = await getRoomById(id);

    if (!room) {
        throw createError(
            "Room not found.",
            404
        );
    }

    if (
        roomData.room_number &&
        await roomNumberExists(
            roomData.room_number,
            id
        )
    ) {
        throw createError(
            "Room number already exists.",
            409
        );
    }

    const payload = {
        updated_at: new Date().toISOString(),
    };

    if (roomData.room_type !== undefined)
    payload.room_type = roomData.room_type;

if (roomData.department !== undefined)
    payload.department = roomData.department;

if (roomData.opening_time !== undefined)
    payload.opening_time = roomData.opening_time;

if (roomData.closing_time !== undefined)
    payload.closing_time = roomData.closing_time;

if (roomData.has_projector !== undefined)
    payload.has_projector = roomData.has_projector;

if (roomData.has_wifi !== undefined)
    payload.has_wifi = roomData.has_wifi;

if (roomData.has_ac !== undefined)
    payload.has_ac = roomData.has_ac;

if (roomData.has_whiteboard !== undefined)
    payload.has_whiteboard = roomData.has_whiteboard;

    const { data, error } = await supabase
        .from("rooms")
        .update(payload)
        .eq("id", id)
        .select()
        .single();

    if (error) throw error;

    return data;
};

/* =========================================
   Delete Room
========================================= */

const deleteRoom = async (id) => {

    const room = await getRoomById(id);

    if (!room) {
        throw createError(
            "Room not found.",
            404
        );
    }

    const booked = await hasActiveBookings(id);

    if (booked) {
        throw createError(
            "Cannot delete room with active bookings.",
            400
        );
    }

    const { error } = await supabase
        .from("rooms")
        .delete()
        .eq("id", id);

    if (error) throw error;

    return true;
};

/* =========================================
   Update Room Status
========================================= */

const updateRoomStatus = async (
    id,
    status
) => {

    const room = await getRoomById(id);

    if (!room) {
        throw createError(
            "Room not found.",
            404
        );
    }

    const allowedStatus = [
        "available",
        "maintenance",
        "inactive",
    ];

    if (!allowedStatus.includes(status)) {
        throw createError(
            "Invalid room status.",
            400
        );
    }

    const { data, error } = await supabase
        .from("rooms")
        .update({
            status,
            updated_at: new Date().toISOString(),
        })
        .eq("id", id)
        .select()
        .single();

    if (error) throw error;

    return data;
};

/* =========================================
   Search Available Rooms
========================================= */

const searchAvailableRooms = async (
    queryParams
) => {

    const {
        booking_date,
        start_time,
        end_time,
        building,
        floor,
        capacity,
    } = queryParams;

    if (
        !booking_date ||
        !start_time ||
        !end_time
    ) {
        throw createError(
            "booking_date, start_time and end_time are required.",
            400
        );
    }

    let roomQuery = supabase
        .from("rooms")
        .select("*")
        .eq("status", "available");

    if (building)
        roomQuery = roomQuery.eq(
            "building",
            building
        );

    if (floor)
        roomQuery = roomQuery.eq(
            "floor",
            floor
        );

    if (capacity)
        roomQuery = roomQuery.gte(
            "capacity",
            Number(capacity)
        );

    const {
        data: rooms,
        error: roomError,
    } = await roomQuery;

    if (roomError) throw roomError;

    const {
        data: bookings,
        error: bookingError,
    } = await supabase
        .from("bookings")
        .select(`
            room_id,
            start_time,
            end_time,
            status
        `)
        .eq("booking_date", booking_date)
        .in("status", [
            "approved",
            "confirmed",
        ]);

    if (bookingError) throw bookingError;

    const availableRooms = rooms.filter(
        (room) => {

            const roomBookings =
                bookings.filter(
                    (booking) =>
                        booking.room_id === room.id
                );

            const hasConflict =
                roomBookings.some(
                    (booking) =>
                        start_time <
                            booking.end_time &&
                        end_time >
                            booking.start_time
                );

            return !hasConflict;
        }
    );

    return {
        total: availableRooms.length,
        rooms: availableRooms,
    };
};

/* =========================================
   Export
========================================= */

module.exports = {
    getRoomById,
    roomNumberExists,
    createRoom,
    getAllRooms,
    updateRoom,
    deleteRoom,
    updateRoomStatus,
    hasActiveBookings,
    searchAvailableRooms,
};