class Employee {
    constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }
}

class EmployeeFormComponent {
    constructor(document, employee) {
        this.document = document;
        this.employee = employee || null;
    }

    onInit() {
        this.saveOnFormSubmit();
        this.initFormWithEmployeeIfAny();
    }

    saveOnFormSubmit() {
        document.querySelector('form')
            .addEventListener('submit',
                // This binding is necessary to make `this` work in the callback
                this.save.bind(this));
    }

    initFormWithEmployeeIfAny() {
        if (this.employee) {
            document.querySelector('input#firstName').value = this.employee.firstName;
            document.querySelector('input#lastName').value = this.employee.lastName;
        }
    }

    save(event) {
        event.preventDefault();
        const formElement = event.target;
        const firstNameElement = formElement['firstName'];
        const lastNameElement = formElement['lastName'];
        this.employee = new Employee(firstNameElement.value, lastNameElement.value);
    }
}

class EmployeeService {
    getOne(id) {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                const employee = new Employee('John', 'Smith', 123);
                // resolve(employee);
                reject(`No employee with ID ${id} found :(`);
            }, 2000);
        });
    }
}

const employees = new EmployeeService();
const employeePromise = employees.getOne(123);
employeePromise
    .then(createComponentAndInitializeItWith,
        error => {
            console.log(`Error1: ${error}`);
            return new Employee('no name', '');
        })
    .then(value => console.log(`Callback2 got: `, value),
        error => console.log(`Error2: ${error}`));

console.log('End');

function createComponentAndInitializeItWith(employee) {
    const component = new EmployeeFormComponent(document, employee);
    component.onInit();
    console.log(component.employee);
    throw new Error("hi, hi...");
}
