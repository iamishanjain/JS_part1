class Human{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return this.firstName,this.lastName;
    }
    // setName(firstName, lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }
    set fullName(fullName){
        const[firstName,lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Human("ishan", "jain", 20);
 console.log(person1);
// console.log(person1.fullName);
// person1.setName("hhhhh","sharma",45);
// console.log(person1.firstName);
// console.log(person1.lastName);

person1.fullName = "ishan jain";
console.log(person1.fullName);