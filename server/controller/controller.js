var Userdb = require('../model/model');

// Crear y guardar un nuevo usuario
exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({message: 'La pagina solicitada no existe o esta fuera de servicio o vacia'});
        return;
    }

    // Nuevo usuario 
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        status: req.body.status
    })

    // Guardar usuario en la base de datos
    user    
        .save(user)
        .then(data => {
            res.redirect('/add-user')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ha ocurrido un error con el servidor, toma de aca!"
            });
        })
}

// Buscar y retornar todos los usuarios o un solo usuario.
exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data => {
                if(!data){
                    res.status(400).send({message: "No encontramos ese usuario " + id})
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({message: "Problemas buscando con el ID " + id})
            })
    } else {
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({message : err.message || "Ha ocurrido un error al solicitar la información"})
            })
    }
}

