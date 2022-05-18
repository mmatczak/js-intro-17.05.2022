import {Employee} from './employee.js'; // ECMAScript Modules

export class EmployeeService {
    getOne(id) {
        return new Promise(resolve => {
            setTimeout(() =>
                resolve(new Employee('John', 'Smith', id)), 500);
        });
    }

    saveOne(employee) {  // (employee: Employee) => Promise<Employee>
        // TODO: return Promise, delay by 3 seconds, return Employee with new ID
        return fetch('api/employees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employee)});
    }
}
