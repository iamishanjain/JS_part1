// <----------- forEach Method ------------->


// const numbers = [2,3,4,5,6];
// // function myFunc(numbers, index){
// //      console.log("index is", index, "numbr is", numbers);
// // }
// // for(let i = 0; i<numbers.length; i++){
// //     myFunc(numbers[i], i);
// // }
//  numbers.forEach(function(number, index){
//     console.log(number*3, index);
//  })

//  const users = [
//      {firstName : "ishan jain", age: 21},
//      {firstName : "ishan ja", age: 22},
//      {firstName : "ishan j", age: 23},
//      {firstName : "ishan", age: 24},
//  ]
//  users.forEach((user, index) =>{
//      console.log(user.firstName, index);
//  })

// for(let user of users){
//   console.log(user.firstName);
// }




// <----------- map Method ------------->


// const array = [2,3,4,5,6];

// const square = number => {return number*number;}
// const squareNumber = array.map(square);
// console.log(squareNumber);

// const users = [
//            {firstName : "ishan jain", age: 21},
//            {firstName : "ishan ja", age: 22},
//            {firstName : "ishan j", age: 23},
//            {firstName : "ishan", age: 24},
//      ]

//  const usernMe = users.map((user)=>{
//           return user.firstName;
//      })
//      console.log(usernMe);




// <----------- filter Method ------------->


// const numbers = [2,4,56,7,8];

// const isEven = (number) =>{
//     return number%2===0;
// }
// const evenNumbers = numbers.filter(isEven);

// console.log(evenNumbers);

// const names = [
//      {firstName : "ishan jain", age :24},
//      {firstName : "shan jain", age :24},
//      {firstName : "ishan jain", age :24},
//      {firstName : "shan jain", age :24},
// ]

// const usingFilter = (hello, index) =>{
//      return hello.firstName, index;
// }
// const filterNames = names.filter(usingFilter);
// console.log(filterNames);




// <----------- Reduce Method ------------->

// const numbers = [1,2,3,4,5,10];

// const sum = numbers.reduce((accumulator, currentValue) =>{
//     return accumulator + currentValue;
// },100);
// console.log(sum);

// accumulator   currentValue    return
//    1               3              4
//    3               3              6
//    6               4              10
//    10              5              15
//    15              10             25

// const usercArt = [
//      {productId : 1, productName : "mobile", price : 20000},
//      {productId : 2, productName : "Laptop", price : 21000},
//      {productId : 3, productName : "TV", price : 22000},
// ];

// const totalPrice = usercArt.reduce((totalPrice, currentproduct) =>{
//      return totalPrice + currentproduct.price; 
// },0);
// console.log(totalPrice);

//  totalPrice     currentvalue        return
//     0               {}                  20000
//     20000          21000              41000
//     41000          22000              63000




// <----------- Sort Method ------------->

// const numbers = [2,41,50,100,300];

// // numbers.sort();
// // console.log(numbers);

// numbers.sort((a,b) =>{
//    return a-b;
// });
// console.log(numbers);

// const products = [
//     {productId : 1, productName : "p1", price : 2100},
//     {productId : 2, productName : "p2", price : 2300},
//     {productId : 3, productName : "p3", price : 4200},
//     {productId : 4, productName : "p4", price : 7600},
//     {productId : 5, productName : "p5", price : 200},
// ]

//lowtohigh

// products.sort((a,b)=>{
//     return a.price-b.price;
// });
// console.log(products);

// HightoLow

// products.sort((a,b)=>{
//     return b.price-a.price;
// });
// console.log(products);



// <----------- Find Method ------------->

// const Sname = ["billon", "bat", "ball", "billi"];

// function isLength(string) {
//     return string.length === 3;
// };
// const ans = Sname.find((String)=>String.length === 3); 
// console.log(ans);

// const users = [
//     {userId : 1, userName : "ishan"},
//     {userId : 2, userName : "jain"},
//     {userId : 3, userName : "yoyo"},
//     {userId : 4, userName : "honey"},
//     {userId : 5, userName : "singh"},
// ];

// const ans = users.find((user)=>{
//     return user.userId === 3;
// });
// console.log(ans);




// <----------- Every Method ------------->

// const numbers = [2,4,,6,8];

// function isEven(number){
//     return number%2 === 0;
// }
// // const ans = numbers.every((number)=>number%2===0);  first method
// const ans = numbers.every(isEven)  second method

// console.log(ans);


// const products = [
//     {productId : 1, productName : "p1", price : 2100},
//     {productId : 2, productName : "p2", price : 2300},
//     {productId : 3, productName : "p3", price : 420},
//     {productId : 4, productName : "p4", price : 700},
//     {productId : 5, productName : "p5", price : 200},
// ]
// const ans = products.every((cartItem)=>cartItem.price<3000);
// console.log(ans);




// <----------- Some Method ------------->

// const numbers = [2,5,11,9];
// // ek bhi even number aate hi positive ho jayega

// const ans = numbers.some((number)=>{
//    return number%2===0;
// });
// console.log(ans);

// const products = [
//     {productId : 1, productName : "p1", price : 2100},
//     {productId : 2, productName : "p2", price : 230000},
//     {productId : 3, productName : "p3", price : 420},
//     {productId : 4, productName : "p4", price : 700},
//     {productId : 5, productName : "p5", price : 200},
// ]

// const ans = products.some((userCart)=>{
//     return userCart.price > 100000;
// });
// console.log(ans);




// <----------- Fill Method ------------->

// const myArray = new Array(10).fill(-1);
// console.log(myArray);

// const numbers = [1,2,3,4,5,6,7,8,9];
// const ans = numbers.fill(10,2,6);
// console.log(ans);




// <----------- Splice Method ------------->

// const Hello = ["item1", "item2", "item3"];
//delete
// Hello.splice(1,1);
// console.log(Hello);


// const Hello = ["item1", "item2", "item3"];
//inserted
// Hello.splice(1, 0,"insertrd ote");
// console.log(Hello);

// const Hello = ["item1", "item2", "item3"];
// //inserted and deleted
// Hello.splice(1, 2,"insertrd one", "inserted two");
// console.log(Hello);




// <----------- Maps------------->

// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key
// like array, number, string

// object literal 
// key -> string 
// key -> symbol

// const person = new Map();
// person.set('firstName', 'ishan');
// person.set('age', 20);
// person.set(2, 'two');
// person.set([1,2,3], 'onetwothree');
// person.set({1:'one'}, 'two');
// console.log(person.get('firstName'));
// console.log(person.keys());
// for(let keys of person.keys()){
//     console.log(keys, typeof keys);
// }

// const info = {
//     id : 1,
//     firstName: "ishan",
// }

// const extraInfo = new Map();
// extraInfo.set(info,{age:20, gender:"male"});
// console.log(extraInfo);
// console.log(info.id);
// console.log(extraInfo.get(info).gender);


// iterables 
// jispe hum for of loop laga sakein
// string , array are iterable and objects are not iterable

// const firstName = "IShan";
// for(let char of firstName){
//     console.log(char);
// }

// for(let item of items){
//     console.log(item);
// // }
// const users = {'key1':'value1', 'key2':'value1'}
// for(let items of users){
//     console.log(items);
// }

// array like object 
// jinke pas length property hoti hai 
// aur jiko hum index se access kar sakte hai
// example :- string 

// const firstName = "ishan";
// console.log(firstName.length);
// console.log(firstName[2]);




// <----------- Sets------------->

// Sets (it is iterable)
// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)

// const sets = new Set([1,2,3,3]);
// console.log(sets);





// <----------- optional chaining------------->

// const user = {
//     firstNAme : "ishan",
//     adddress : {houseNumber : '2345'},
// }

// console.log(user.firstNAme);
// console.log(user.adddress); // yaha tak undefined batayega agar upar waali line comment karde to
// console.log(user.adddress.houseNumber); // yeh line mein error dega kyuki undefined ke karan

// console.log(user?.firstNAme);
// console.log(user?.adddress?.houseNumber); // ab yeh line comment hone par bhui error nahi dega keval undefone dbatayega




// <----------- Methods------------->
// function insie object

function moreInfo(){
    console.log(this.firstName, this.age);
}
const person1 = {
    firstName : "mohit",
    age : 7,
    about : moreInfo,
}
const person2 = {
    firstName : "kuu",
    age : 15,
    about : moreInfo,
}
const person3 = {
    firstName : "hiii",
    age : 10,
    about : moreInfo,
}
person1.about();
person2.about();
person3.about();
