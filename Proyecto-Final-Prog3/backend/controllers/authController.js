const jwt = require('jsonwebtoken');
const Usuario = require("../models/persistencia/usuarioModPer");

async function login(req, res) {
    try{
    const { email, password } = req.body;
    console.log("recibo login con", email, password);
    const usuario = await Usuario.obtenerPorEmail(email);
    console.log("usuario encontrado", usuario);    
    if (!usuario || usuario.password !== password) {
        return res.status(401).json({ error: "Credenciales inválidas" });
    }

    // Crea el token con los datos del usuario
    const token = jwt.sign(
      { id: usuario.id, email: usuario.email, rol: usuario.rol },
      process.env.JWT_SECRET || 'tu_clave_secreta',
      { expiresIn: '2h' }
    );

    // Envía el token al frontend
    res.json({ token,
        user : {
            id: usuario.id,
            email: usuario.email,
            rol: usuario.rol
        }
     });
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
}

module.exports = { login };