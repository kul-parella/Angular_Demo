import {Component} from '@angular/core';

@Component({
 selector:'sandbox32',
 template:`<h1>Hello World</h1>
    <div [style.font-size]="isSpecial ? 'x-large': 'smaller'">font size depends on isSpecial</div>

    <div [ngStyle]="currentStyles"> This div is initially
    saveable & special</div>

    <p>My B'd is {{birthday | date}}</p>
     <p>My B'd is {{birthday | date:"MM-dd-yyyy"}}</p>
    <p>My B'd is {{birthday | date:"yyyy"}}</p>
     <p> I love {{'cake' | uppercase}}</p>
     <p> I hate {{'CATES' | lowercase}}</p>
     <p> your total is {{total | currency:"AUD":"1"}}</p>
     <p> our fee is {{fee | percent}} </p> 
       
        `
})
export class SandboxComponent32 {

isSpecial= true;
canSave = true;
currentStyles= {};

birthday = new Date(1981, 1, 15);
total = 500;
fee =0.5;
constructor() {
    this.setCurrentStyles();
}

setCurrentStyles(){
    this.currentStyles = {
        'font-style': this.canSave ? 'italic' :'normal',
        'font-size': this.isSpecial ? '24px' : '12px'
    }
}



}