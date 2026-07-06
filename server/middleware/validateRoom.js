const validateRoom = (req, res, next) => {

    const {
        room_number,
        room_name,
        building,
        floor,
        capacity
    } = req.body;

    // Allow PATCH /status without validation
    if (req.method === "PATCH") {
        return next();
    }

    if (
        !room_number ||
        !room_name ||
        !building ||
        floor === undefined ||
        capacity === undefined
    ) {
        return res.status(400).json({
            success: false,
            message: "Please provide all required room fields."
        });
    }

    if (Number(capacity) <= 0) {
        return res.status(400).json({
            success: false,
            message: "Capacity must be greater than zero."
        });
    }

    if (Number(floor) < 0) {
        return res.status(400).json({
            success: false,
            message: "Invalid floor number."
        });
    }

    next();
};

module.exports = validateRoom;