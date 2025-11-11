// // // @everyone JS Dom and Class Lesson Rectangle (Тэгш өнцөгт)

// // // ```js
// // //  Шинж чанар:

// // // width → өргөн

// // // height → өндөр

// // // Функц:

// // // area() → талбайг тооцно (width × height)

// // // perimeter() → периметрийг тооцно (2 × (width + height))

// // // // Жишээ
// // // const rect = new Rectangle(5, 3);
// // // console.log(rect.area());      // 15
// // // console.log(rect.perimeter()); // 16

// // // :two: Student (Оюутан)

// // // Шинж чанар:

// // // name → нэр

// // // age → нас

// // // Функц:

// // // introduce() → “Hi, I'm NAME and I'm AGE years old.” гэж буцаана

// // // // Жишээ
// // // const student = new Student("Sara", 20);
// // // console.log(student.introduce()); // "Hi, I'm Sara and I'm 20 years old."

// // // class Student {
// // //   constructor(name, age) {
// // //     this.name = name;
// // //     this.age = age;
// // //   }

// // //   introduce() {
// // //     return "Hi" + this.name + "and" + "I'm" + this.age + "years old";
// // //   }
// // // }
// // // const student = new Student("Sara", 20);
// // // console.log(student.introduce());

// // // // :three: BankAccount (Банкны данс)

// // // // Шинж чанар:

// // // // owner → эзэмшигчийн нэр

// // // // balance → үлдэгдэл

// // // // Функц:

// // // // deposit(amount) → мөнгө нэмнэ

// // // // withdraw(amount) → мөнгө хасна, хангалтгүй бол "Not enough balance!" гэж хэлнэ

// // // // getBalance() → үлдэгдлийг буцаана

// // // // // Жишээ
// // // // const account = new BankAccount("Enkhee", 100);
// // // // account.deposit(50);  // 150
// // // // account.withdraw(30); // 120
// // // // console.log(account.getBalance()); // 120

// // // // class BankAccount {
// // // //   constructor(owner, balance) {
// // // //     this.owner = owner;
// // // //     this.balance = balance;
// // // //   }
// // // //   deposit(value) {
// // // //     return this.balance + value;
// // // //   }
// // // //   withdraw(value) {
// // // //     if (value > this.balance) {
// // // //       console.log("Balance not enought");
// // // //     } else {
// // // //       return this.balance - value;
// // //     }
// // //   }
// // //   getBalance() {
// // //     return this.balance;
// // //   }
// // // }

// // // // const account = {
// // // //     owner : "Enkhee",
// // // //     balance : 100,
// // // //     deposit : function () {
// // // //             return this.balance + value;
// // // //     }
// // // // }
// // // const account = new BankAccount("Enkhee", 100);
// // // account.deposit(50); // 150
// // // account.withdraw(30); // 120
// // // console.log(account.getBalance()); // 120

// // // // :four: TodoList (Даалгаврын жагсаалт)

// // // // Шинж чанар:

// // // // tasks → даалгаврын жагсаалт

// // // // Функц:

// // // // addTask(task) → шинэ даалгавар нэмнэ

// // // // removeTask(task) → даалгаврыг устгана

// // // // showTasks() → бүх даалгаврыг харуулна

// // // // // Жишээ
// // // // const todo = new TodoList();
// // // // todo.addTask("Learn JavaScript");
// // // // todo.addTask("Do homework");
// // // // todo.removeTask("Do homework");
// // // // console.log(todo.showTasks()); // ["Learn JavaScript"]

// // // class TodoList {
// // //   constructor() {
// // //     this.task = [];
// // //   }
// // //   addTask(value) {
// // //     this.task.push(value);
// // //   }
// // //   removeTask(value) {
// // //     if (this.task.includes(value)) {
// // //       return (this.task = this.task.filter((item) => item !== value));
// // //     }
// // //   }

// // //   showtask() {
// // //     return this.task;
// // //   }
// // // }

// // // const todo = new TodoList();
// // // todo.addTask("Learn JavaScript");
// // // todo.addTask("Do homework");
// // // todo.removeTask("Do homework");
// // // console.log(todo.showtask()); // ["Learn JavaScript"]

// // // // :five: Calculator (Тооны машин)

// // // // Функцүүд:

// // // // add(a, b) → a + b

// // // // subtract(a, b) → a - b

// // // // multiply(a, b) → a × b

// // // // divide(a, b) → a ÷ b, b = 0 бол "Cannot divide by zero!" гэж буцаана

// // // // // Жишээ
// // // // const calc = new Calculator();
// // // // console.log(calc.add(5, 3));       // 8
// // // // console.log(calc.subtract(10, 4)); // 6
// // // // console.log(calc.multiply(2, 6));  // 12
// // // // console.log(calc.divide(10, 2));   // 5
// // // // console.log(calc.divide(10, 0));   // "Cannot divide by zero!"```

// // // class Calculator {
// // //   constructor() {}
// // //   add(a, b) {
// // //     return a + b;
// // //   }
// // //   subtract(a, b) {
// // //     return a - b;
// // //   }
// // //   multiply(a, b) {
// // //     return a * b;
// // //   }
// // //   divide(a, b) {
// // //     return a / b;
// // //   }
// // // }
// // // const calc = new Calculator(5, 3);
// // // console.log(calc.add(5, 3)); // 8
// // // console.log(calc.subtract(10, 4)); // 6
// // // console.log(calc.multiply(2, 6)); // 12
// // // console.log(calc.divide(10, 2)); // 5
// // // console.log(calc.divide(10, 0)); // "Cannot divide by zero!"```

// // // JS LOOPS PRACTICE EXERCISES
// // // ================================

// // // ===========================================
// // // 1. Print even numbers from 2 to 20 using a while loop
// // // ===========================================

// // // let i = 0;
// // // while (i < 20) {
// // //   if (i % 2 === 0) console.log(i);
// // //   i++;
// // // }

// // // let i = 0;
// // // while (i < 20) {
// // //   i += 2;
// // //   console.log(i);
// // // }

// // // ===========================================
// // // 2. Print the multiplication table of 5 using a for loop
// // // ===========================================

// // // let i = 1;
// // // while (i <= 10) {
// // //   let five = `5 * ${i} = ${5 * i}`;
// // //   i++;
// // //   console.log(five);
// // // }

// // // for (let i = 1; i <= 10; i++) {
// // //   const hurd = `5 * ${i} = ${5 * i}`;
// // //   console.log(hurd);
// // // }

// // // ===========================================
// // // 3. Sum numbers from 1 to 100 using a while loop
// // // ===========================================

// // // let o = 1;
// // // let sum = 0;
// // // while (o <= 100) {
// // //   sum += o;
// // //   o++;
// // //   console.log(sum);
// // // }

// // // ===========================================
// // // 4. Print all elements of an array using a for loop
// // // Example array: const fruits = ["apple", "banana", "cherry", "date"];
// // // ===========================================
// // // const fruits = ["apple", "banana", "cherry", "date"];
// // // for (let i=0; i<fruits.length; i++){
// // //   console.log(fruits[i])
// // // }

// // // ===========================================
// // // 5. Find the largest number in an array using a for loop
// // // Example array:

// // // const numbers = [12, 45, 67, 23, 89, 34];
// // // let max = 0;
// // // for (i = 0; i < numbers.length; i++) {
// // //   if (max < numbers[i]) {
// // //     max = numbers[i];
// // //   }
// // // }
// // // console.log(max);

// // // ===========================================

// // // ===========================================
// // // 6. Reverse an array using a while loop
// // // Example array: const arr = [1, 2, 3, 4, 5];
// // // ===========================================

// // // const arr = [1, 2, 3, 4, 5];
// // // arr.reverse();
// // // console.log(arr);

// // // ===========================================
// // // 7. Count down from 10 to 1 using a for loop
// // // ===========================================

// // // for (i = 0; i <= 10; i++) {
// // //   console.log(10 - i);
// // // }

// // // ===========================================
// // // 8. Print only odd numbers between 1 and 20 using a while loop
// // // ===========================================
// // // let x = 0;
// // // while (x <= 20) {
// // //   if (x % 2 === 1) {
// // //     console.log(x);
// // //   }
// // //   x++;
// // // }

// // // ===========================================
// // // 9. Calculate the factorial of a number using a for loop
// // // Example: let num = 5;
// // // ===========================================

// // // let o = 1;
// // // let sum = 1;
// // // while (o <= 5) {
// // //   sum = sum * o;
// // //   o++;
// // //   console.log(sum);
// // // }
// // // let factor = 1;
// // // for (let i = 1; i <= 5; i++) {
// // //   factor *= i;
// // // }
// // // console.log(factor);

// // // ===========================================
// // // 10. Print each character of a string using a for loop
// // // Example: let word = "JavaScript";
// // // ===========================================

// // // ===========================================
// // // 11. Keep asking for user input until they type "stop" (while loop)
// // // while (true){
// // //   const input = prompt ("");
// // //   if(input === "stop"){
// // //     console.log("stopped")
// // //     break;
// // //   }
// // // }

// // // ==========================
// // // Exercise 1 — map
// // // ==========================
// // // Given the array of numbers, return a new array where each number is doubled.

// // const numbers1 = [2, 5, 8, 10];

// // const numb = numbers1.map((num) => num * 2);
// // console.log(numb);

// // // ==========================
// // // Exercise 2 — filter
// // // ==========================
// // // From the array below, return only the even numbers.
// // const numbers2 = [3, 6, 9, 12, 15, 18];
// // const numbe = numbers2.filter((num) => num % 2 === 0);
// // console.log(numbe);

// // // ==========================
// // // Exercise 3 — find
// // // ==========================
// // // Find the first object where age is greater than 25.
// // const people1 = [
// //   { name: "Alice", age: 21 },
// //   { name: "Bob", age: 26 },
// //   { name: "Charlie", age: 29 },
// //   { name: "Diana", age: 19 },
// // ];
// // const firstobj = people1.find((peo) => peo.age > 25);
// // console.log(firstobj);

// // // ==========================
// // // Exercise 4 — some
// // // ==========================
// // // Check if there is at least one number greater than 100.
// // const numbers3 = [10, 20, 45, 80, 99];
// // const som = numbers3.some((num) => num > 100);
// // console.log(som);

// // // ==========================
// // // Exercise 5 — includes
// // // ==========================
// // // Check if the word "banana" exists in the array.
// // const fruits = ["apple", "banana", "grape", "orange"];
// // console.log(fruits.includes("banana"));

// // // ==========================
// // // Exercise 6 — map + filter
// // // ==========================
// // // First, filter numbers greater than 10, then map to their squares.
// // const numbers4 = [3, 7, 12, 15, 20, 2];

// // const squares = numbers4.filter((maps) => maps > 10).map((item) => item * item);

// // console.log(squares);

// // // ===============================================
// // // 💪 JavaScript-ийн ахисан түвшний дасгалууд — forEach, map, filter, find, includes
// // // ===============================================

// // // 3 болон 5-д хоёуланд нь хуваагддаг бүх тоог ол, дараа нь тэдгээрийг 2 дахин нэмэгдүүл.
// // const nums1 = [3, 5, 10, 15, 18, 20, 30, 33];
// // // Хариу: [30, 60]
// // // Кодоо энд бичээрэй 👇

// // // const result = [];
// // // nums1.map((num) => {
// // //   if (num % 3 === 0 && num % 5 === 0) {
// // //     result.push(num * 2);
// // //   }
// // // });

// // // console.log(result);

// // // ========== Дасгал 2 ==========
// // // Доорх жагсаалтаас нэрэндээ “dev” гэсэн үгтэй (том, жижиг үсэг ялгахгүйгээр) хэрэглэгчдийг ол.
// // const usernames = ["AlphaDev", "beta", "DEVKing", "coder", "proDev99"];
// // // Хариу: ["AlphaDev", "DEVKing", "proDev99"]
// // // Кодоо энд бичээрэй 👇

// // // const result1 = usernames.filter((name) => name.toLowerCase().includes("dev"));

// // // console.log(result1);

// // // ========== Дасгал 3 ==========
// // // Үгсийн массиваас эхний болон сүүлийн үсэг нь ижил (том, жижиг үсэг хамаагүй) үгсийн уртыг буцаа.
// // const words1 = ["level", "Anna", "world", "radar", "Robot"];
// // // Хариу: [5, 4, 5]
// // // Кодоо энд бичээрэй 👇

// // console.log(
// //   words1.filter(
// //     (word) =>
// //       word.toLowerCase().charAt(0) ===
// //       word.toLowerCase().charAt(word.length - 1)
// //   )
// // );

// // // ========== Дасгал 4 ==========
// // // Доорх бараанууд дундаас 50 доллараас хямд бөгөөд нэрэндээ “s” үсэгтэй бараануудын нэрийг буцаа.
// // const products = [
// //   { name: "Socks", price: 15 },
// //   { name: "Shoes", price: 75 },
// //   { name: "Shirt", price: 45 },
// //   { name: "Hat", price: 30 },
// // ];
// // console.log(
// //   products
// //     .filter((product) => product.price > 50)
// //     .filter((item) => item.name.includes("s"))
// // );

// // // Хариу: ["Socks", "Shirt"]
// // // Кодоо энд бичээрэй 👇

// // // ========== Дасгал 5 ==========
// // // Нас нь 25-аас доош бөгөөд “Python” чадвартай анхны сурагчийг ол.
// // const students1 = [
// //   { name: "Luna", age: 22, skills: ["Python", "C++"] },
// //   { name: "Max", age: 26, skills: ["JavaScript", "HTML"] },
// //   { name: "Tara", age: 21, skills: ["Python", "React"] },
// // ];
// // // Хариу: { name: "Luna", ... }
// // // Кодоо энд бичээрэй 👇
// // console.log(
// //   students1
// //     .filter((student) => student.age < 25)
// //     .filter((item) => item.skills.includes("Python"))
// // );

// class Person {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
//   greet() {
//     return `hello, my name is ${this.name}`;
//   }
// }

// const john = new Person("john", 24, "male");

// console.log(john.greet());
// class Student extends Person {
//   constructor(name, age, gender, studentId) {
//     super(name, age, gender);
//     this.studentId = studentId;
//   }
//   study() {
//     console.log(`${this.name} is studying`);
//   }
// }
// const Person = new Person("Alice", 30, "female");
// Person.greet();

// const student = new Student("bob", 20, "Male", "d223423");
// student.greet();
// student.study();

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     return this.width * this.height;
//   }

//   perimeter() {
//     return 2 * (this.width + this.height);
//   }
// }

// const height = document.getElementById("height");
// const width = document.getElementById("width");
// const infoDiv = document.getElementById("hariu");

// const Area = () => {
//   const rect = new Rectangle(height.value, width.value); //input holbogdoj bna
//   const area = document.createElement("div"); //area button holboj bn

//   area.innerHTML = "<p>" + "Area: " + rect.area() + "</p>"; //hariu

//   infoDiv.appendChild(area);
// };

// const Perimeter = () => {
//   const rect = new Rectangle(parseInt(height.value), parseInt(width.value));
//   const perimeter = document.createElement("div");
//   perimeter.innerHTML = "<p>" + "Perimeter: " + rect.perimeter() + "</p>"; //hariu
//   infoDiv.appendChild(perimeter);
// };

// two: Student (Оюутан)

// introduce() → “Hi, I'm NAME and I'm AGE years old.” гэж буцаана

// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     return "Hi,I'm " + this.name + " and i'm " + this.age + " years old.";
//   }
// }

// const name2 = document.getElementById("name");
// const age = document.getElementById("age");
// const infoDiv = document.getElementById("hariu");

// const introduce = () => {
//   const intro = new Student(name2.value, age.value);
//   const introduce = document.createElement("div");

//   introduce.innerHTML = "<p>" + intro.introduce() + "</p>";
//   infoDiv.appendChild(introduce);
// };


// BankAccount (Банкны данс)

// Шинж чанар:

// owner → эзэмшигчийн нэр

// balance → үлдэгдэл

// Функц:

// deposit(amount) → мөнгө нэмнэ

// withdraw(amount) → мөнгө хасна, хангалтгүй бол "Not enough balance!" гэж хэлнэ

// getBalance() → үлдэгдлийг буцаана


// class BankAccount {
//   constructor(owner, balance) {
//     this.owner = owner;
//     this.balance =
//       typeof balance === "number" ? balance : parseInt(balance, 10);
//   }
//   deposit(amount) {
//     this.balance = this.balance + parseInt(amount, 10);
//     return this.balance;
//   }
//   withdraw(amount) {
//     if (amount > this.balance) {
//       return "Insufficent amount";
//     }
//     this.balance = this.balance - amount;
//     return this.balance;
//   }
//   getAccountInfo() {
//     return Owner: ${this.owner} Balance: ${this.balance};
//   }
// }

// const ownerInput = document.getElementById("ownerInput");
// const amountInput = document.getElementById("amountInput");
// const accountInfo = document.getElementById("accountInfo");
// const actionAmountInput = document.getElementById("actionAmount");
// let account = null;
// const displayAccountInfo = () => {
//   accountInfo.innerText = account.getAccountInfo();
// };

// const createAccount = () => {
//   account = new BankAccount(ownerInput.value, amountInput.value);
//   displayAccountInfo();
// };

// const deposit = () => {
//   account.deposit(actionAmountInput.value);
//   displayAccountInfo();
//   actionAmountInput.value = "";
// };
// ﻿



const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("tasks");

const addTask = () => {
  if (taskInput.value === "") return;
  const newTaskElement = document.createElement("li");
  newTaskElement.innerHTML = `<span>${taskInput.value}</span>`;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(newTaskElement);
  });
  newTaskElement.appendChild(deleteButton);
  taskList.appendChild(newTaskElement);
  taskInput.value = "";
};

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

