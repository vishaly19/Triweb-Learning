function Student(name, age){
    this.name = name;
    this.age = age;
}

let student1 = new Student("Vishal",23);



let student2 = new Student("Markandey",28);




console.log("hello")

console.log(Student.prototype);

Student.prototype.display = function(){
    console.log(`hello ${this.name}`);
}

student1.display();
student2.display();