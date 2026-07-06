const errorMiddleware = (err, req, res, next) => {
    console.error("========================================");
    console.error("ERROR");
    console.error("Time:", new Date().toISOString());
    console.error("Method:", req.method);
    console.error("URL:", req.originalUrl);
    console.error("Message:", err.message);

    if (process.env.NODE_ENV === "development") {
        console.error(err.stack);
    }

    console.error("========================================");

    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";

    // JWT Errors
    if (err.name === "JsonWebTokenError") {
        statusCode = 401;
        message = "Invalid authentication token.";
    }

    if (err.name === "TokenExpiredError") {
        statusCode = 401;
        message = "Authentication token has expired.";
    }

    // Validation Error
    if (err.name === "ValidationError") {
        statusCode = 400;
    }

    return res.status(statusCode).json({
        success: false,
        message,
        ...(process.env.NODE_ENV === "development" && {
            stack: err.stack,
        }),
    });
};

module.exports = errorMiddleware;