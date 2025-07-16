const db = require ('..');
const SeguimientoEntidad = require ('../../entities/Seguimiento');

class SeguimientoModPer {
    static async obtenerTodos() {
        const seguimientos = await db.Seguimiento.findAll();
        return seguimientos.map(s => new SeguimientoEntidad(s.id, s.usuario_id, s.challenge_id, s.dia, s.completado));
    }
    static async obtenerPorChallenge(id) {
        const seguimientos = await db.Seguimiento.findAll({
            where: {challenge_id: id}
        });
        return seguimientos.map(s => new SeguimientoEntidad(s.id, s.usuario_id, s.challenge_id, s.dia, s.completado));
    }
    static async obtenerPorChallengeYUsuario(id_challenge, id_usuario) {
            const seguimientos = await db.Seguimiento.findAll({
                where: {challenge_id: id_challenge, usuario_id: id_usuario}
            });
            return seguimientos.map(s => new SeguimientoEntidad(s.id, s.usuario_id, s.challenge_id, s.dia, s.completado));
        }
    static async obtenerPorChallengeYUsuarioYDia(id_challenge, id_usuario,dia) {
            const seguimientos = await db.Seguimiento.findAll({
                where: {challenge_id: id_challenge, usuario_id: id_usuario, dia: dia}
            });
            return seguimientos.map(s => new SeguimientoEntidad(s.id, s.usuario_id, s.challenge_id, s.dia, s.completado));
      }
static async descompletarDia(id_challenge, id_usuario, dia) {
    const seguimiento = await db.Seguimiento.findOne({
        where: {challenge_id: id_challenge, usuario_id: id_usuario, dia: dia}
    });
    if(seguimiento) {
        seguimiento.completado = false;
        await seguimiento.save();
    }
    return seguimiento;
}
static async completarDia(id_challenge, id_usuario, dia) {
    let seguimiento = await db.Seguimiento.findOne({
        where: {challenge_id: id_challenge, usuario_id: id_usuario, dia: dia}
    });
    if(!seguimiento) {
        seguimiento = await db.Seguimiento.create({
            challenge_id: id_challenge,
            usuario_id: id_usuario,
            dia: dia,
            completado: true
        });
    } else {
        seguimiento.completado = true;
        await seguimiento.save();
    }
    return seguimiento;
}
    static async crear (seguimiento) {
        const nuevoSeguimiento = await db.Seguimiento.create({
            usuario_id: seguimiento.usuario_id,
            challenge_id: seguimiento.challenge_id,
            dia: seguimiento.dia,
            completado: seguimiento.completado
        });
        return new SeguimientoEntidad(nuevoSeguimiento.id, nuevoSeguimiento.usuario_id, nuevoSeguimiento.challenge_id, nuevoSeguimiento.dia, nuevoSeguimiento.completado);
    }
    static async actualizar (id, seguimiento) {
        if (!id) { return null; }
        const [filasActualizadas] = await db.Seguimiento.update({
            usuario_id: seguimiento.usuario_id,
            challenge_id: seguimiento.challenge_id,
            dia: seguimiento.dia,
            completado: seguimiento.completado
        }, {
            where: { id: id }
        });
        if (filasActualizadas === 0) { return null; }

        const seguimientoActualizado = await db.Seguimiento.findByPk(id);
        return new SeguimientoEntidad(seguimientoActualizado.id, seguimientoActualizado.usuario_id, seguimientoActualizado.challenge_id, seguimientoActualizado.dia, seguimientoActualizado.completado);
    }
    static async eliminar (id) {
        if (!id) { return null; }
        const filasEliminadas = await db.Seguimiento.destroy({
            where: { id: id }
        });
        return filasEliminadas === 1;
    }

}

module.exports = SeguimientoModPer