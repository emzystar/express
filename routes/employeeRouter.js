const express = require('express')
const router = express.Router()
const {getEmployees,
    getEmployee,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,} = require('../controller/employeeController')

    // to fefactor our code we have

    router.route('/employees').get(getEmployees).post(createNewEmployee);
    router.route('/employees/:id').get(getEmployee).patch(updateEmployee).delete(deleteEmployee)


    // old method


    // router.get('/employees', getEmployees);
    // router.post('/employees', createNewEmployee);
    // router.get('/employees/:id', getEmployee);
    // router.patch('/employees/:id', updateEmployee);
    // router.delete('/employees/:id', deleteEmployee);

    module.exports = router