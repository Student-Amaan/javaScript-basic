// Number

let balance = 120;
let anotherBalance = new Number(120);

// console.log(balance);
// console.log(anotherBalance.valueOf());

// console.log(typeof balance);
// console.log(typeof anotherBalance);

//Boolean;

let isActive = true;
let isReallyActive = new Boolean(true)// not recommended

// null and undefined

let firstname = undefined;
let lastname = null;
// console.log(firstname);//undefined
// console.log(lastname);// null

//string

let myString = "hello";
let myStringOne = "Hola";
let username = "Aman";

let oldGreet = myString + " " + "Aman";
// console.log(oldGreet);

let Greetmsg = `hello ${username}!`;
// console.log(Greetmsg);

//Symbol

let sm1 = symbol("Aman");
let sm2 = symbol("Aman");

console.log(sm1);