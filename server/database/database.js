const mongoose = require('mongoose')

const dbConnection = (url) => {
    try {
        mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const db = mongoose.connection
        db.once("open",() => {console.log("connected to the database")})
        db.on("error", error => console.log(error))
    } catch(err){
        console.log(error)
    }
}

module.exports = dbConnection