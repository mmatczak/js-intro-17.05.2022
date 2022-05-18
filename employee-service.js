// import {Employee} from './employee.js'; // ECMAScript Modules

const Employee = require('./employee')

class EmployeeService {
    getOne(id) {
        return new Promise(resolve => {
            setTimeout(() =>
                resolve(new Employee('John', 'Smith', id)), 500);
        });
    }

    saveOne(employee) {  // (employee: Employee) => Promise<Employee>
        // TODO: return Promise, delay by 3 seconds, return Employee with new ID
        return new Promise(resolve => {
            setTimeout(() => {
                    // const newEmployee = new Employee(employee.firstName, employee.lastName, 9876);
                    const newEmployee = {...employee, id: 987};
                    resolve(newEmployee);
                },
                3000);
        })
    }
}

module.exports = EmployeeService;  // CommonJS
