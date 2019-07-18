let employees = require('../data/input.json')
const filename = './data/input.json'
const helper = require('./helper.js')
const fs = require('fs');


function getEmployees() {
    return new Promise((resolve, reject) => {
        if (employees.length === 0) {
            reject({
                message: 'No employees available',
                status: 202
            })
        }
        resolve(employees)
    })
}

function getEmployee(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(employees, id)
        .then(employee => resolve(employee))
        .catch(err => reject(err))
    })
}

function insertEmployee(newEmployee, link1,link2) {
    return new Promise((resolve, reject) => {
        const id = { id: helper.getId(employees) }
        var new_quotes = {"quote1": link1, "quote2": link2}   
        //console.log(quote1)
        newEmployee = { ...id, ...newEmployee, ...new_quotes }
        employees.push(newEmployee)
        helper.writeJSONFile(filename, employees)
        resolve(newEmployee)
    })
}

function updateEmployee(id, newEmployee) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(employees, id)
        .then(employee => {
            const index = employees.findIndex(p => p.id == employee.id)
            id = { id: employee.id }        
            quotes = {"quote1": employee.quote1, "quote2": employee.quote2}
            employees[index] = { ...id, ...newEmployee, ...quotes }
            helper.writeJSONFile(filename, employees)
            resolve(employees[index])
        })
        .catch(err => reject(err))
    })
}

function deleteEmployee(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(employees, id)
        .then(() => {             
            employees = employees.filter(p => p.id != id)
            helper.writeJSONFile(filename, employees)
            resolve()
        })
        .catch(err => reject(err))
    })
}

module.exports = {
    insertEmployee,
    getEmployees,
    getEmployee, 
    updateEmployee,
    deleteEmployee
}