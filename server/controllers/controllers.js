const Contact = require('../model/model')

exports.getAllContact = async (req, res) => {
    if(req.query.id) {
        console.log(req.query.id)
        id = req.query.id
        Contact.findById(id).then(data => {
            if(!data) {
                res.status(400).send({message: `Not found task with id ${id}`})
            } else {
                res.send(data)
            }
        }).catch(err => {
            res.status(500).send({message: error.message || "Error occured while retriving task"})
        })
    } else {
        try {
            const contacts = await Contact.find().then(data => {
                res.send(data)
            })
        } catch(err) {
            res.status(500).send({message: err.message || "Error occured while retriving task"})
        }
    }

}

// exports.getContact = async (req, res) => {
//     const id = req.params.id
//     console.log(id)
// }

exports.createContact = async(req, res) => {
    if(!req.body) {
        res.status(400).send({msg:"Contact can not be empty"})
    }
    try {
        const contact = await Contact.create(req.body)
        res.redirect('/')
    } catch(err) {
        res.status(500).send({msg: err.message || 'An error occured while creating task'})
    }
    
}

exports.updateContact = (req, res) => {
    const id = req.params.id
    Contact.findByIdAndUpdate(id, req.body, {useFindAndModify: false}).then(data => {
        if(!data) {
            res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
        } else {
            res.send(data)
        }
    }).catch(err =>{
        res.status(500).send({ message : "Error Update user information"})
    })
}

exports.deleteContact = (req, res) => {
    const id = req.params.id;

    Contact.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}