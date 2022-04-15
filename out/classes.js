"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //  id: number
        //  name: string
        this.employees = [];
        // this.id = id
        // this.name = name
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'Tech Nerds');
        this.admins = admins;
    }
    showAdmins() {
        console.log(this.admins);
    }
}
const accounting = new Department(10, 'Accounting');
const itDept = new ITDepartment(42, ['Brian', 'Kelvin']);
accounting.addEmployee('Brian');
accounting.addEmployee('Dominic');
accounting.describe();
accounting.printEmployeeInformation();
itDept.describe();
itDept.showAdmins();
