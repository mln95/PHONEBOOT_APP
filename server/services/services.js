const axios = require('axios')

exports.homeRoutes = (req, res) => {
    axios.get('http://localhost:3000/api/v1/contact').then(function(response) {
        res.render("index", {contact: response.data})
    })
}   

exports.addContactRoutes = (req, res) => {
    res.render("addcontact")
}

exports.updateContactRoutes = (req, res) => {
    axios.get('http://localhost:3000/api/v1/contact', {params: {id: req.query.id}}).then(function(response) {
        res.render("updatecontact", {contact: response.data})
    })
}