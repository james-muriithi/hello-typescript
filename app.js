"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.salary = 0;
    }
    get getSalary() {
        return this.salary;
    }
    describe() {
        console.log(`Department ${this.id}: ${this.name}`);
    }
}
class SubDepartment extends Department {
    constructor(id, name, admins) {
        super(id, name);
        this.admins = admins;
        this.admins = admins;
    }
}
const accounting = new Department("D2", "Accounting");
accounting.describe();
