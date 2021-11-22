class Department {
  private salary: number = 0;

  public get getSalary(): number {
    return this.salary;
  }

  constructor(private id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }
}

class SubDepartment extends Department {
  constructor(id: string, name: string, public admins: string[]) {
    super(id, name);
    this.admins = admins;
  }
}

const accounting = new Department("D2", "Accounting");
accounting.describe();
