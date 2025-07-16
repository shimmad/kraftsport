const JOI= require('joi');

const ejercicioSchema= JOI.object({
    nombre: JOI.string().optional().allow(''),
    descripcion: JOI.string().optional().allow(''),
    video_url: JOI.string().required(),
    tipo: JOI.string().required(),
});

module.exports= (req, res, next) => {
    const {error}= ejercicioSchema.validate(req.body);
    if(error){
        return res.status(400).json({error: error.details[0].message});
    }
    next();
}
    