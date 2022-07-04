// Code goes here!

class Department {
  // private: id: number;
  // name: string = 'Default';
  static fiscalYear = 2022;
  private employees: string[] = []; // asi solo es accesible desde dentro de la clase, solo se puede
  // añadir con el metodo addEmployee y no como en la linea 33 
 // private, public and readonly son de TS, en JS no existe. Con readonly una propiedad solo se
 // puede inicializar una vez, luego no se puede cambiar, sera un valor default
  constructor( private readonly id: number, public name: string){
    //this.name = n;
  }

  static createEmployee(name: string){
    return {
      name: name
    }
  }

  describe(this: Department){
    console.log(`Deparment(${this.id}):  ${this.name}`)
  }
  
  addEmployee(employee: string){
    this.employees.push(employee)
  }

  printEmployeeInfo(){
    console.log(this.employees.length);
    console.log(this.employees);
  }
}


class ITDepartment extends Department {
  constructor(id: number, public admins: string[]){
    super(id, 'ITCrowd')
    this.admins = admins;
  }
}


class HRDepartment extends Department {
  private lastReport: string;
  private static instance: HRDepartment;
  constructor(id: number, public reports: string[], public HRemployee: string[]){
    super(id, 'HR')
    this.reports = reports;
    this.lastReport = reports[0];
  }
  addReport(text: string){
    this.reports.push(text)
  }

  getReports(){
    console.log(this.reports)
  }

  addEmployee(name: string){
    if(name === 'Celia'){
      return
    } 
   // this.employees.push() NO SE PUEDE HACER PQ ES PRIVATE, Y AUNQUE LA CLASE HAGA EXTENDS NO 
   // ES ACCESIBLE

   this.HRemployee.push(name)

  }

  static getInstance(){
    if (HRDepartment.instance){
      return this.instance;
    }
    this.instance = new HRDepartment(2, [], [])
    return this.instance;
  }

  get mostRecentReport(){
    if(this.lastReport){
      return this.lastReport;
    }
    throw new Error('No report found')
  }

  set mostRecentReport(value: string){
    if(!value){
      throw new Error('Please pass in a valid value!')
    }
    this.addReport(value)
  }

 
}

const hr1 = HRDepartment.getInstance();
const hr2  = HRDepartment.getInstance();
console.log('h1 and h2', hr1, hr2)


const ITCrowd = new ITDepartment(4, ['lluna', 'Boira'])
const accounting = new Department(2,'Accounting');

const employee1 = Department.createEmployee('Celiuska')

console.log('employee1', employee1, Department.fiscalYear);

const hr= new HRDepartment(6, [], ['employee1'])

hr.addEmployee('employee2')

hr.addReport('Upsi');

console.log('hr', hr)


ITCrowd.addEmployee('Geek1');
ITCrowd.addEmployee('Geek2');
ITCrowd.describe();
ITCrowd.printEmployeeInfo();

console.log('IT department', ITCrowd)

accounting.describe();
accounting.addEmployee('Celia');
accounting.addEmployee('Boira');


//accounting.employees[2] = 'Lluna' // a evitar en aplicaciones grandes y en equipo, liada 


accounting.printEmployeeInfo();

// const accountingCopy = { name: 'holis again', describe: accounting.describe };

// accountingCopy.describe(); 

