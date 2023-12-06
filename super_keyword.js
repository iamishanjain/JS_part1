class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return this.name;
    }
    isSuperCute(){
        return this.age <=1;
    }
    isCute(){
        return true;
    }
}
class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed = speed;
    }
}
const dog1 = new Dog("tommy", 30, 60);
console.log(dog1);
console.log(dog1.eat());
console.log(dog1.isCute());
console.log(dog1.isSuperCute());
