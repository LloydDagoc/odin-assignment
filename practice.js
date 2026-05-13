class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        return `Hi, my name is ${this.name} and I am ${this.age} years old`;
    }
    get info() {
      return`${this.name} - ${this.age}`;
    }
   set info(value){
    
       const parts = value.split(",");
       
       const [name,age] = parts;
       
       const number = Number(age);
       
    this.name = name;
    this.age = number;
   }
}

class Student extends Person(){
    #grades = [];
    
    addGrade(grade){
        
    }
    showGrade(){
    
    }
    getAverage(){
        
    }
}

const person1 = new Person("Lloyd", 25);
console.log(person1.info);
person1.info = "Jane,25";
console.log(person1.info);