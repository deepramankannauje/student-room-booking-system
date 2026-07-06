const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const errorMiddleware = require("./middleware/errorMiddleware");
const cookieParser = require("cookie-parser");
// routes
const authRoutes = require("./routes/authRoutes");
const roomRoutes = require("./routes/roomRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const adminRoutes = require("./routes/adminRoutes");


const supabase = require("./config/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(cookieParser());



// routes calls
app.use("/api/auth", authRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
    res.json({
        success: res,
        message: "Server is running 🚀"
    });
});

app.get("/test-db", async (req, res) => {
    const { data, error } = await supabase
        .from("users")
        .select("*");

    if (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }

    res.json(data);
});

app.use(errorMiddleware);

module.exports = app;