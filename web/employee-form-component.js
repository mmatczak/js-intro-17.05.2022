import {Employee} from './employee.js';


export class EmployeeFormComponent {
    observers = [];

    constructor(document, employeeService) {
        this.document = document;
        this.employeeService = employeeService;
        this.employee = null;
    }

    onInit(employeeId) {
        this.saveOnFormSubmit();
        this.initFormWithEmployeeIfAny(employeeId);
    }

    saveOnFormSubmit() {
        document.querySelector('form')
            .addEventListener('submit',
                // This binding is necessary to make `this` work in the callback
                this.save.bind(this));
    }

    initFormWithEmployeeIfAny(employeeId) {
        if (employeeId != null) {
            this.employeeService.getOne(employeeId)
                .then(employee => {
                    this.document.querySelector('input#firstName').value = employee.firstName;
                    this.document.querySelector('input#lastName').value = employee.lastName;
                })
        }
    }

    onEmployeeChange(callbackFn) {
        this.observers.push(callbackFn);
    }

    notifyOnNewEmployee() {
        this.observers.forEach(observer => observer(this.employee));
    }

    save(event) {
        event.preventDefault();
        const formElement = event.target;
        const firstNameElement = formElement.querySelector('#firstName');
        const lastNameElement = formElement.querySelector('#lastName');
        // this.employee = new Employee(firstNameElement.value, lastNameElement.value);
        // TODO: call EmployeeService.save and log success to the console
        this.employeeService.saveOne(new Employee(firstNameElement.value, lastNameElement.value))
            .then(newEmployee => {
                this.employee = newEmployee;
                console.log(newEmployee);
            })
            .then(this.notifyOnNewEmployee.bind(this));
    }


}
