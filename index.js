import {EmployeeFormComponent} from './employee-form-component.js';
import {EmployeeService} from './employee-service.js';

const component = new EmployeeFormComponent(document, new EmployeeService());
component.onInit(123);
console.log(component.employee);
console.log('End');
