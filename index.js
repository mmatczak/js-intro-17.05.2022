class Employee {
    constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }
}

class EmployeeFormComponent {
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
            this.employeeService.getOne(employeeId).then(employee => {
                this.document.querySelector('input#firstName').value = employee.firstName;
                this.document.querySelector('input#lastName').value = employee.lastName;
            })
        }
    }

    save(event) {
        event.preventDefault();
        const formElement = event.target;
        const firstNameElement = formElement['firstName'];
        const lastNameElement = formElement['lastName'];
        this.employee = new Employee(firstNameElement.value, lastNameElement.value);
        // TODO: call EmployeeService.save and log success to the console
    }
}

class EmployeeService {
    getOne(id) {
        return Promise.resolve(new Employee('John', 'Smith', id));
    }

    saveOne(employee) {  // (employee: Employee) => Promise<Employee>
        // TODO: return Promise, delay by 3 seconds, return Employee with new ID
    }
}


const component = new EmployeeFormComponent(document, new EmployeeService());
component.onInit(123);
console.log(component.employee);
console.log('End');
