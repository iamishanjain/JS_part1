const obj1 = {
    key1 : "value1",
    key2 : "value2"
}
const obj2 = Object.create(obj1); // it will return an empty object but we know that some connection has been established between obj1 and obj2
 obj2.key3 = "value3";
 
console.log(obj2.key2);