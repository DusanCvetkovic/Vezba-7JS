const addNums = num1 => num1 + 5;
    
console.log(addNums(5));



class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear()
    }
    getFullName() {
        return  `${this.firstName} ${this.lastName}`
    }
}


const person1 = new Person('John', 'Doe', '1980-4-28');
const person2 = new Person('Mary', 'Smith', '1970-5-25');

console.log(person1.dob);
console.log(person1.dob.getFullYear());

console.log(person1.getBirthYear());
console.log(person2.getFullName());