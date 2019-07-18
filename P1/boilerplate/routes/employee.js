'use strict';

const express = require('express');
const router = express.Router();
const employee = require('../models/posts')
const helper = require('../models/helper')
const axios = require('axios')
var JSSoup = require('jssoup').default;

router.get('/', async (req, res) => {
    await employee.getEmployees()
        .then(employees => res.json(employees))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            } else {
                res.status(500).json({ message: err.message })
            }
        })
})

router.get('/:id', helper.mustBeInteger, async (req, res) => {
    const id = req.params.id
    await employee.getEmployee(id)
        .then(employee => res.json(employee))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            } else {
                res.status(500).json({ message: err.message })
            }
        })
})

router.post('/', helper.checkFields, async (req, res) => {
    const a = await axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    const b = await axios.get("https://icanhazdadjoke.com")

    var link1 = a['data'][0]
    var soup = new JSSoup(b['data']);
    var tag = soup.find('p');

    var link2 = tag.nextElement['_text']
    console.log(link1, link2)
    await employee.insertEmployee(req.body, link1, link2)
        .then(employee => res.status(201).json({
            message: `The employee #${employee.id} has been created`,
            content: employee
        }))
        .catch(err => res.status(500).json({ message: err.message }))
})

router.put('/:id', helper.mustBeInteger, helper.checkFields, async (req, res) => {
    const id = req.params.id

    await employee.updateEmployee(id, req.body)
        .then(employee => res.json({
            message: `The employee #${id} has been updated`,
            content: employee
        }))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            }
            res.status(500).json({ message: err.message })
        })
})

router.delete('/:id', helper.mustBeInteger, async (req, res) => {
    const id = req.params.id

    await employee.deleteEmployee(id)
        .then(employee => res.json({
            message: `The employee #${id} has been deleted`
        }))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            }
            res.status(500).json({ message: err.message })
        })
})


module.exports = router;
