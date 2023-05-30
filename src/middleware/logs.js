const logRequest = (req, res, next) => {
    console.log('First middleware is in this PATH:', req.path);
    next();
}

module.exports = logRequest;