export {}

let name = 'Nihad';
console.log (`Good Morning! ${name}`);

// let a = 10;
// a = 9;

// let x=10;


// let num1: number = 10;

// let myName: string = 'Nihad';

// let learningTs: boolean = true;

// let u: undefined = undefined;

// let n: null = null;

// let y;
// console.log(y);

// let z = null;
// console.log(z);

// // arrays

// let list1: number[] = [1, 2, 3]
// let list2: Array<number> = [1, 2 ,3]

// console.log(list1);

// //  tuples

// let tuple1: [number, string];
// tuple1 = [10, 'hi'];
// console.log(tuple1[1].substring(1));

// // enum

// enum Color {Blue=4, Green, Red};

// // let c: Color = Color.Green
// // console.log(c);

// let colorName: string = Color[5]
// console.log(colorName);

// // unknown

// let notSure: unknown=4;

// console.log(notSure);

// // any

// let anyValue: any;

// anyValue = 10;
// anyValue = 'hello';
// anyValue = true;

// anyValue()
// anyValue.toUpperCase()

// // void

// function myFunc(): void {
//     console.log('hello');
// }


// // union types

// let peopleAllowed: number|boolean;

// peopleAllowed = 10;
// peopleAllowed = false;



// functions

// function helloo() {
//     console.log ('hello');
// }

// helloo();

// function sum(num1: number, num2: number=10): number {

//         return num1 + num2
// }

// console.log(sum(3));



// interface

// interface employee {
//     firstName: string,
//     lastName: string,
//     ID: number
// }

// function getEmployeeDetails(empdetails: employee) {
//     console.log (empdetails.firstName);
//     console.log (empdetails.lastName);
//     console.log (empdetails.ID);
// }

// getEmployeeDetails({
//     firstName: 'Nihad',
//     lastName: 'Nahmatli',
//     ID: 1001
// });



// classes

// class Employee {
//     employeeName: string;

//     constructor(name) {
//         this.employeeName = name;
//     }

//     hello() {
//         console.log (`hello ${this.employeeName}`);
//     }
// }

// let emp1 = new Employee('Nihad');
// console.log(emp1.employeeName);
// emp1.hello();


// class Manager extends Employee {
//     constructor(name) {
//         super(name);
//     }

//     greet() {
//         console.log ('hello from manager');
//     }

// }

// let manager1 = new Manager('John');
// console.log (manager1.employeeName);
// manager1.hello();
// manager1.greet();



// TS with Mosh


// let sales = 123_456_789;
// let course = 'TypeScript';
// let is_published = true;

// let level;

// function render(document) {

//     console.log (document);

// }



// let numbers: number[] = [];
// numbers.forEach(n => n.)


// let user: [number, string] = [1, 'Mosh']



// const small = 1;
// const medium = 2;
// const large = 3;

// const enum Size { Small=1, Medium, Large };
// let mySize: Size = Size.Medium;
// console.log (mySize);