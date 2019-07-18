const fs = require('fs')

const getId = (array) => {
    return Math.floor(Math.random() * 1000000000);
}

function mustBeInArray(array, id) {
    return new Promise((resolve, reject) => {
        const row = array.find(r => r.id == id)
        if (!row) {
            reject({
                message: 'ID is not good',
                status: 404
            })
        }
        resolve(row)
    })
}

function writeJSONFile(filename, content) {
    fs.writeFile(filename, JSON.stringify(content), (err) => {
        if (err) {
            console.log(err)
        }
    })
}

function mustBeInteger(req, res, next) {
    const id = req.params.id

    if (!Number.isInteger(parseInt(id))) {
        res.status(400).json({ message: 'ID must be an integer' })
    } else {
        next()
    }
}

function checkFields(req, res, next) {
    const { fname, lname, hireDate, role } = req.body
    const accept_role = ["CEO", "MANAGER", "VP", "LACKEY"]
    var d1 = new Date();
    var d2 = new Date(hireDate)
    if (d1 < d2) {
        console.log("Error in date")
        res.status(400).json({ message: 'Date must be in past' })
    }
    if (d1 < d2) {
        console.log("Error in date")
        res.status(400).json({ message: 'Date must be in past' })
    }
    if(accept_role.indexOf(role.toUpperCase()) == -1){
        console.log("Error in role")
        res.status(400).json({ message: 'Role must be ceo/manager/cp/lackey' })
    }
    if (fname && lname && hireDate && role) {
        next()
    } else {
        res.status(400).json({ message: 'fields are not good' })
    }
}

module.exports = {
    getId,
    mustBeInArray,
    writeJSONFile,
    mustBeInteger,
    checkFields
}