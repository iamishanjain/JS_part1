// function createUser(firstName, age){
//   this.firstName = firstName;
//   this.age = age;
// }
// createUser.prototype.about = function(){
//     console.log(this.firstName, this.age);
// }
// const user1 = new createUser("ishan", "20");
//  user1.about();

// const userMethods = {
//     about : function(){
//         return this.firstName, this.age;
//     },
//     is18 : function(){
//         return this.age>=18;   
// },
// sing : function() {
//      return 'too anncsfe';
// }
// }






function createUser (firstName, lastName, email, age, address, about)
{
    //const user = Object.create(createUser.prototype); // this line is returning us a empty object as well as creating an object chain and setting and finding the value in proto
    this.firstName = firstName;       // and proto is a reference of userMethods
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  
    //return this;  // new keyword automatically return without ysing return
} 
createUser.prototype.about = function() {
    return this.firstName, this.age;
}
createUser.prototype.is18 = function(){
    return this.age>=18;
}
createUser.prototype.sing = function(){
    return "lalalalal";
}

const hii = new createUser("ishan","jain","h@gmail.com", "20", "singapore", "all good");
const hii1 = new createUser("ishan","jain","h@gmail.com", "21", "singapore", "all good");
const hii2 = new createUser("ishan","jain","h@gmail.com", "17", "singapore", "all good");
const hii3 = new createUser("mohit","jain","h@gmail.com", "23", "pore", "all good");

console.log(hii);
console.log(hii1.sing());
console.log(hii2.is18());
console.log(hii.about());



for(let key in hii){
    //console.log(key); // it will print all the property which are present in function and in proto

    if(hii1.hasOwnProperty(key)){ // it will return the property which are available only in the creteUser function
        console.log(key);
    }
}