// <----------- Default Parameters ------------>

// function addTwo(a,b){
//   // if(typeof b === "undefined"){
//   //   b = 0;
//   // }
//    return a+b;
// }

// function addTwo(a,b=0){
//  return a+b;
  // }
  // const ans = addTwo(8);
  // console.log(ans);



// <----------- Rest Parameters ------------>


// function myFunc(a,b,c){
//   console.log('a is ${a}')
//   console.log('b is ${b}')
//   console.log('c is ${c}')  
// }
// myFunc(2,3,4,56,7);



// function myFunc(a,b,...c){
//   console.log('a is ${a}');
//   console.log('b is ${b}');
//   console.log('c is ${c}');  
// }
// myFunc(2,3,4,56,7);


// function addAll(...numbers){
//     let total = 0;
//     for(let number of numbers){
//       total  = total + number;
//     }
//     return total;
//   }
//   const ans = addAll(2,3,4,5);
//   console.log(ans);


// <-------------- parameter destructuring ---------------->

//object 
//react

// const person = {
    // firstName: "ishan",
     // gender : "male",
//}

// function Hello(obj){
//     console.log(person.firstName);
//     console.log(person.gender);       normal way 
// }

// function Hello({firstName, gender}){
//     console.log(firstName);
//     console.log(gender);
// }                                       destructuring
// Hello(person);                           

