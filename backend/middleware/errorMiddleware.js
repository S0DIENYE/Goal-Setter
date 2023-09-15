// middlewares are functions that execute when you make the req res cycle
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)

    // set stack message only when were in development mode
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
}


module.exports = {
    errorHandler,
}