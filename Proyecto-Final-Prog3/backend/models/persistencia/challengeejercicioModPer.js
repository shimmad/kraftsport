const db = require ('..');
const ChallengeEjEntidad = require ('../../entities/ChallengeEj');

class challengeEjModPer {

    static async obtenerTodos() {
        const challengeEj = await db.ChallengeEjercicio.findAll();
        return challengeEj.map(challengeEj => new ChallengeEjEntidad(challengeEj.id, challengeEj.challenge_id, challengeEj.ejercicio_id, challengeEj.dia, challengeEj.posicion));
    }
    static async ObtenerEjporDia(id, dia) {
        const challengeEj = await db.ChallengeEjercicio.findAll({
            where: {challenge_id: id, dia: dia}
        });
        return challengeEj.map(challengeEj => new ChallengeEjEntidad(challengeEj.id, challengeEj.challenge_id, challengeEj.ejercicio_id, challengeEj.dia, challengeEj.posicion));
        
    }
    static async obtenerPorChallenge(challenge_id) {
        const challengeEj = await db.ChallengeEjercicio.findAll({
            where: {challenge_id: challenge_id}
        });
        return challengeEj.map(challengeEj => new ChallengeEjEntidad(challengeEj.id, challengeEj.challenge_id, challengeEj.ejercicio_id, challengeEj.dia, challengeEj.posicion));
    }
    static async crear (challengeEj) {
        const nuevoChallengeEj = await db.ChallengeEjercicio.create({
            challenge_id: challengeEj.challenge_id,
            ejercicio_id: challengeEj.ejercicio_id,
            dia: challengeEj.dia,
            posicion: challengeEj.posicion
        });
        return new ChallengeEjEntidad(nuevoChallengeEj.id, nuevoChallengeEj.challenge_id, nuevoChallengeEj.ejercicio_id, nuevoChallengeEj.dia, nuevoChallengeEj.posicion);

    }
    static async actualizar (id, challengeEj) {
        if (!id) { return null; }
        const [filasActualizadas] = await db.ChallengeEjercicio.update({
            challenge_id: challengeEj.challenge_id,
            ejercicio_id: challengeEj.ejercicio_id,
            dia: challengeEj.dia,
            posicion: challengeEj.posicion
        }, {
            where: { id: id }
        });
        if (filasActualizadas === 0) { return null; }
    
        const challengeEjActualizado = await db.ChallengeEjercicio.findByPk(id);
        return new ChallengeEjEntidad(challengeEjActualizado.id, challengeEjActualizado.challenge_id, challengeEjActualizado.ejercicio_id, challengeEjActualizado.dia, challengeEjActualizado.posicion);
    }
    static async eliminar(id) {
        if (!id) { return null; }
        const filasEliminadas = await db.ChallengeEjercicio.destroy({
            where: { id: id }
        });
        return filasEliminadas === 1;
    }
    static async obtenerDiasConVideosPorChallenge(challenge_id) {
    // Trae todos los ChallengeEj para ese challenge
    const relations = await db.ChallengeEjercicio.findAll({
        where: { challenge_id },
        include: [
            {
                model: db.Ejercicio,
                attributes: ['id', 'nombre', 'video_url', 'descripcion', 'tipo'] // agrega aquí los campos que quieras
            }
        ],
        order: [
            ['dia', 'ASC'],
            ['posicion', 'ASC']
        ]
    });

    // Agrupar por día
    const diasMap = {};
    relations.forEach(rel => {
        if (!diasMap[rel.dia]) diasMap[rel.dia] = [];
        diasMap[rel.dia].push({
            id: rel.Ejercicio.id,
            nombre: rel.Ejercicio.nombre,
            video_url: rel.Ejercicio.video_url,
            descripcion: rel.Ejercicio.descripcion,
            tipo: rel.Ejercicio.tipo,
            posicion: rel.posicion
        });
    });

    // Convertir a array [{ dia, videos }]
    return Object.entries(diasMap).map(([dia, videos]) => ({
        dia: Number(dia),
        videos
    }));
}
}



module.exports = challengeEjModPer