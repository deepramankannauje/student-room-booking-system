const roomService = require("../services/roomService");

/* =========================================
   Create Room
========================================= */
const createRoom = async (req, res, next) => {
    try {
        const room = await roomService.createRoom(req.body);

        return res.status(201).json({
            success: true,
            message: "Room created successfully.",
            room,
        });
    } catch (error) {
        next(error);
    }
};

/* =========================================
   Get All Rooms
========================================= */
const getAllRooms = async (req, res, next) => {
    try {
        const result = await roomService.getAllRooms(req.query);

        return res.status(200).json({
            success: true,
            total: result.total,
            page: result.page,
            limit: result.limit,
            totalPages: result.totalPages,
            rooms: result.rooms,
        });
    } catch (error) {
        next(error);
    }
};

/* =========================================
   Get Room By ID
========================================= */
const getRoomById = async (req, res, next) => {
    try {
        const room = await roomService.getRoomById(req.params.id);

        if (!room) {
            return res.status(404).json({
                success: false,
                message: "Room not found.",
            });
        }

        return res.status(200).json({
            success: true,
            room,
        });
    } catch (error) {
        next(error);
    }
};

/* =========================================
   Update Room
========================================= */
const updateRoom = async (req, res, next) => {
    try {
        const room = await roomService.updateRoom(
            req.params.id,
            req.body
        );

        return res.status(200).json({
            success: true,
            message: "Room updated successfully.",
            room,
        });
    } catch (error) {
        next(error);
    }
};

/* =========================================
   Delete Room
========================================= */
const deleteRoom = async (req, res, next) => {
    try {

        await roomService.deleteRoom(req.params.id);

        return res.status(200).json({
            success: true,
            message: "Room deleted successfully."
        });

    } catch (error) {
        next(error);
    }
};

/* =========================================
   Update Room Status
========================================= */
const updateRoomStatus = async (req, res, next) => {
    try {

        const room = await roomService.updateRoomStatus(
            req.params.id,
            req.body.status
        );

        return res.status(200).json({
            success: true,
            message: "Room status updated successfully.",
            room
        });

    } catch (error) {
        next(error);
    }
};

/* =========================================
   Search Available Rooms
========================================= */
const searchAvailableRooms = async (req, res, next) => {
    try {

        const result = await roomService.searchAvailableRooms(req.query);

        return res.status(200).json({
            success: true,
            total: result.total,
            rooms: result.rooms
        });

    } catch (error) {
        next(error);
    }
};

/* =========================================
   Export Controllers
========================================= */

module.exports = {
    createRoom,
    getAllRooms,
    getRoomById,
    updateRoom,
    deleteRoom,
    updateRoomStatus,
    searchAvailableRooms
};