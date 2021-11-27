// Write your solution in this file!
const employee = {
    name: "1",
    streetAddress: "2",
}

function updateEmployeeWithKeyAndValue(employee, name, Sam) {
    return {...employee,
    name: "Sam",
    streetAddress: "11 Broadway",
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value) {
    employee.streetAddress =  "12 Broadway"
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee}
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}