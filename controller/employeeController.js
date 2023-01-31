const employees = require("../models/employees");

// get all employees - /employees --req.params
const getEmployees = (req, res) => {
  employees
    .find()
    .then((data) => {
      res.status(200).render("Index", { employees: data });
    })
    .catch((err) => {
      console.log(err);
    });
};

// get a single employee /employee/:id r--eq.params
const getEmployee = (req, res) => {
  const { id } = req.params;
  employees
    .findById({ _id: id })
    .then((data) => {
      res.status(200).render("Details", { employee: data });
    })
    .catch((err) => {
      console.log(err);
    });
};

// create a new employee /employees --req.body
const createNewEmployee = (req, res) => {
  const { name, role, age } = req.body;
  const employee = new employees(req.body);
  employee
    .save()
    .then((data) => {
      // res.status(200).json({msg: "employee created", data})
      res.redirect("/employees");
    })
    .catch((err) => {
      console.log(err);
    });
};

// update an employee /employee/:id   --params, body
const updateEmployee = (req, res) => {
  const { id } = req.params;
  // req.body
  employees
    .findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    })
    .then((data) => {
      res.status(200).json({ msg: "employee updated", data });
    })
    .catch((err) => {
      console.log(err);
    });
};

// delete an employee /employees/:id
const deleteEmployee = (req, res) => {
  const { id } = req.params;
  employees
    .findByIdAndDelete({ _id: id })
    .then((data) => {
      res.status(200).json({ redirect: "/employees" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getEmployees,
  getEmployee,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
};
