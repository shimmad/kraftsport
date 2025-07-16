const Joi = require('joi');


const schema = Joi.object({
    challenge_id: Joi.number().required(),
    ejercicio_id: Joi.number().required(),
    posicion: Joi.number().required(),
    dia: Joi.number().required()
    //no se quie tengo q cambiar, pero me gustaria q el dia solo sea un entero no un date
    


});

module.exports = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}