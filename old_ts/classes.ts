class Department {
  //  id: number
  //  name: string
  private employees: string[] = []

  constructor(private readonly id: number, public name: string) {
    // this.id = id
    // this.name = name
  }

  describe() {
    console.log('Department: ' + this.name)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

class ITDepartment extends Department {
  admins: string[]
  constructor(id: number, admins: string[]) {
    super(id, 'Tech Nerds')
    this.admins = admins
  }

  showAdmins() {
    console.log(this.admins)
  }
}

const accounting = new Department(10, 'Accounting')
const itDept = new ITDepartment(42, ['Brian', 'Kelvin'])
accounting.addEmployee('Brian')
accounting.addEmployee('Dominic')

accounting.describe()
accounting.printEmployeeInformation()

itDept.describe()
itDept.showAdmins()
