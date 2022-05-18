class EmployeeStore {
    idSeq = 0;

    constructor() {
        this.employees = [{firstName: 'John', lastName: 'Smith', id: this.nextId()}];
    }

    save(employee) {
        const newEmployee = {...employee, id: this.nextId()};
        this.employees.push(newEmployee);
        return newEmployee;
    }

    findAll() {
        return [...this.employees];
    }

    nextId() {
        return this.idSeq++;
    }
}

module.exports = EmployeeStore;
