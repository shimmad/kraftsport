const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // El token se manda en el header Authorization: Bearer <token>
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: "No tiene token" });

    const token = authHeader.split(' ')[1];
    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET || 'tu_clave_secreta');
        next();
    } catch (err) {
        return res.status(401).json({ error: "Token inválido" });
    }
};