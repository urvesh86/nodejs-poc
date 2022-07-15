//Middleware example
module.exports = (req, res, next) => {

    if (!req.query.age) {
        res.send('Plese enter valid age.');
    }

    next();
}