const express = require('express')
const app = express()
const port = 3000
const EmployeeStore = require('./employee-store');
const employees = new EmployeeStore();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static('web'));

app.get('/api/employees', (req, res) => {
    res.send(employees.findAll());
});

app.post('/api/employees', (req, res) => {
    const newEmployee = employees.save(req.body);
    res.send(newEmployee);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
