// <----------------object cocepts----------------->

// const key = "email";
// const hello = {
//     name: "ishan",
//     age:20,
//     hobbies:['ccdhcgedy','hwee','hii'] 
//  }
//  hello[key] = "hello.com";
// console.log(hello);
// console.log(person["person hobbies"]);
// console.log(hello.hobbies);

// <----------------object iterartion-------------->

//first method (for in loop)
// const hello = {
//          name: "ishan",
//          age:20,
//         hobbies:['ccdhcgedy','hwee','hii'] 
// }
// for(let key in hello){
//     console.log('${key} : ${hello[key]}');
// }

// <--------------object.keys method-------------->

// const hello = {
//           name: "ishan",
//           age:20,
//          hobbies:['ccdhcgedy','hwee','hii'] 
//  }
//  console.log(typeof(Object.keys(hello)));  // will check the type 
//  const val = Array.isArray((Object.keys(hello)));
//  console.log(val);

//  for(let key of Object.keys(hello))
//  {
//     console.log(hello[key]);
//  }


// <-------------computed properties------------->

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "hello";
// const value2 = "hii";

// const obj={
// objkey1 : "hello",
// objkey2 : "hii",
// }
// console.log(obj);

//  const obj={
//  key1 : value1,
//  key2 : value2,
// }
// console.log(obj);

// const obj = {
//     [key1] : value1,
//     [key2] : value2,
// }
// console.log(obj);


// const obj = {}
//     obj[key1] = value1,
//     obj[key2] = value2,

// console.log(obj);



//<--------------object Destructuring------------->

// const hii = {
//     name : "ishan jain",
//     age : 21,
//     famousSong : "hello",
//     class : 12,
// }

// const name = hii.name;   rather than using this we will use tge below mwthod to deconstruct our object.
// const{name, age, famousSong} = hii;

// const{name:var1, famousSong:var2} = hii;  by using ':' we have stored the value of both name and famoussong in var1 and var2.
// console.log(hii);

// const {name, age, ...restProps} = hii;   the after 2 properties will be stored in ...restprops.
// console.log(restProps);




// <------------objects inside array-------------->

// const users = [
//     {userID : 1, name : "ishan", age : 20,},
//     {userID : 2, name : "ishan123", age : 10,},
//     {userID : 3, name : "ishan5657", age : 30,},
// ]
// console.log(users);

// for(let user of users){
//     console.log(user.name);
// }


//<---------------- nested destructuring-------------------->

// const users = [
//          {userID : 1, name : "ishan", age : 20,},
//          {userID : 2, name : "ishan123", age : 10,},
//          {userID : 3, name : "ishan5657", age : 30,},
//      ]

//      const [user1, user2, user3] = users;
//      console.log(user1,user2);

//  const [{name}, , {userID}] = users;
//  console.log(name);
//  console.log(userID);


//   const [{name:username}, , {userID}] = users;   in this we have changed teh variable name from name to username
//   console.log(username);
//   console.log(userID);