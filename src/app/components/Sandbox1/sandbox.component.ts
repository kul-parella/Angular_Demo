import {Component} from '@angular/core';
import {Customer} from './customer';
@Component({
    selector:'sandbox',
    template:`<h1>Name is {{name}} and age {{age}} years old
    <br/>first name is {{person.firstname}}
    last name is {{person.lastname}}
    </h1>
    
    <ul>
    <li>{{1+1}}</li>
    <li>{{showAge()}}</li>
    </ul>

    `
})
export class SandboxComponent {

//types
name:string = 'kuladeep parella';
age:number = 35;
hasChilder:boolean = true;
city:any ='Boston';
// city=35;
myNumberArray:number[] = [1,2,3];
myStringsArray:string[]=['hello', 'world'];
myAnyArray:any[]=[1,2,'String'];
myTuple: [string, number]= ['hello', 3];
unusable: void = undefined;
u: undefined = undefined;
n:null = null;

person = {firstname:'kuladeep', lastname:'parella'};

customer: {id:number, name:string, email:string}

//Customer from interface
intercustomer:Customer;

customers:Customer[];

hasBirthday() {
    this.age +=1;
}

showAge() {
    return this.age;
}

constructor() {
    this.customer= {
        id:1,
        name:'john',
        email:'john@gmail.com'
    }

    this.customers = [
    {
        id:1,
        name:'john',
        email:'john@gmail.com'
    },
    {
        id:2,
        name:'john',
        email:'john@gmail.com'
    },
    {
        id:3,
        name:'john',
        email:'john@gmail.com'
    }

];

}

}


