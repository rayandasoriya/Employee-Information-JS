const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const { MongoClient, ObjectID } = require('mongodb')
const assert = require('assert')

app.use(bodyParser.json())

const MongoUrl = 'mongodb://localhost:27017'
const database = 'ContactList'

MongoClient.connect(MongoUrl, { useNewUrlParser: true }, (err, client) => {
    assert.equal(err, null, 'database connection failed')
    const db = client.db(database)
    app.post('/addemployee', (req, res) => {
        let newemployee = req.body
        db.collection('employeelist').insertOne(newemployee, (err, data) => {
            if (err) res.send('cant add employee')
            else res.send('new employee added')
        })
    })

    app.get('/employeelist', (req, res) => {
        db.collection('employeelist').find().toArray((err, data) => {
            if (err) res.send('Error in fetching employee',e)
            else res.send(data)
        })
    })

    app.delete('/removeemployee/:id', (req, res) => {
        let romovedID = ObjectID(req.params.id)
        db.collection('employeelist').findOneAndDelete({ _id: romovedID }, (err, data) => {
            if (err) res.send('Employee not deleted')
            else res.send('Employee Deleted')
        })
    })

    app.put("/modifyemployee/:id", (req, res) => {
        let modifiedemployee = req.body
        let modifiedemployeeid = ObjectID(req.params.id)
        db.collection('employeelist').update({ _id: modifiedemployeeid }, modifiedemployee, (err, data) => {
            if (err) res.send('Employee cant be modified')
            else res.send('Employee modified')
        })
    })
})

app.listen(3700, (err) => {
    if (err) console.log(`connection failed`)
    else console.log(`server is running`)
})