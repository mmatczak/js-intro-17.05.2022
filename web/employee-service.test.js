// import {EmployeeService} from './employee-service';

const EmployeeService = require('./employee-service');

describe('EmployeeService', function () {
    it('gets employee by ID', function () {
        expect.hasAssertions();
        // given
        const service = new EmployeeService();
        // when
        return service.getOne(123)
            .then(employee => {
                // then
                expect(employee).not.toBeNull();
                expect(employee.id).toBe(123);
            });
    });

    // TODO: it('saves employee', function() {...})
});
