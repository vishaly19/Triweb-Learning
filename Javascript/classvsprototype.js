/*Class based language
class Employee{
    int sn;
    string mobile;
    string address;

    void setAddress(string address){
        this.address = address;
    }

    void setMobile(string mobile){
        this.mobile = mobile;
    }

    void setName(string name){
        this.name=name;
    }

    void autoSerial(){
        sn++;
    }
}

Employee Akarsh = new Employee();
Akarsh.setMobile("12121212");
System.out.println(Akarsh.mobile)

*/




function Employee(){
    this.department = "None";
    this.mobile = ''
}

function Manager(name){
    Employee.call(this)
    this.name = name;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager


let vishal = new Manager("Vishal");

console.log(vishal);

vishal.email = "abc@gmail.com";

console.log(vishal);

console.log(vishal.__proto__);