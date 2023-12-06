// // const userMethods = {
// //     about : function(){
// //         return this.firstName, this.age;
// //     },
// //     is18 : function(){
// //         return this.age>=18;   
// // },
// // sing : function() {
// //      return 'too anncsfe';
// // }
// // }
// function createUser (firstName, lastName, email, age, address, about)
// {
//     const user = Object.create(createUser.prototype); // this line is returning us a empty object as well as creating an object chain and setting and finding the value in proto
//     user.firstName = firstName;       // and proto is a reference of userMethods
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
  
//     return user;
// } 
// createUser.prototype.about = function() {
//     return this.firstName, this.age;
// }
// createUser.prototype.is18 = function(){
//     return this.age>=18;
// }
// createUser.prototype.sing = function(){
//     return "lalalalal";
// }

// const hii = createUser("ishan","jain","h@gmail.com", "20", "singapore", "all good");
// const hii1 = createUser("ishan","jain","h@gmail.com", "21", "singapore", "all good");
// const hii2 = createUser("ishan","jain","h@gmail.com", "17", "singapore", "all good");
// const hii3 = createUser("mohit","jain","h@gmail.com", "23", "pore", "all good");

// console.log(hii);
// console.log(hii1.sing());
// console.log(hii2.is18());
// console.log(hii.about());