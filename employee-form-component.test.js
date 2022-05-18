/**
 * @jest-environment jsdom
 */

const EmployeeFormComponent = require('./employee-form-component');

describe('EmployeeFormComponent', function () {
    it('saves employee on button click', function (done) {
        expect.hasAssertions();
        // given
        const testId = 556;
        const serviceMock = {
            saveOne(employee) {
                return new Promise(resolve => {
                    setTimeout( () => {
                        resolve({...employee, id: testId})
                    }, 1000);
                });
            }
        };
        document.body.innerHTML =
            `<form>
                <label for="firstName">First name</label>
                 <input id="firstName" value="TEST NAME">
                 <label for="lastName">Last name</label>
                 <input id="lastName" value="TEST LAST NAME">
                 <button>Save</button>
             </form>`;
        const component = new EmployeeFormComponent(document, serviceMock);
        component.onInit();
        component.onEmployeeChange(() => {
            // then
            expect(component.employee.id).toBe(testId);
            done();
        })
        // when
        document.querySelector('button').click();
    });
});
