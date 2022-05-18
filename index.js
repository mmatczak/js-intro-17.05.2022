class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
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

const component = new EmployeeFormComponent(document, new Employee('John', 'Smith'));
component.onInit();

setTimeout(() => console.log(component.employee), 5000);
