const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging

    // Send a generic error message and the status code
    res.status(500).json({
        message: "Something went wrong!",
        error: err.message,
    });
};

module.exports = errorMiddleware;

