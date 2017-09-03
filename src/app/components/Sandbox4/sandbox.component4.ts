import {Component} from '@angular/core';

@Component({
    selector: 'Sandbox4',
    template: `<h1>Events, Forms and ng-Bind</h1>
    <button id="btn" (click)= "fireEvent($event)">Click Event</button>
    <br>
    <button id="btn2" (mouseover)= "fireEvent($event)">
    mouseover Event</button>
    <br>
    <button id="btn" (mousedown)= "fireEvent($event)">
    mousedown Event</button>
    <br>
    <button id="btn" (mouseup)= "fireEvent($event)">
    mouseup Event</button>
    <br>
    <button id="btn" (doubleclick)= "fireEvent($event)">
    dbclick Event</button>
    <br>
    <button id="btn" (drag)= "fireEvent($event)">
    drag Event</button>
    <br>
    <button id="btn" (dragover)= "fireEvent($event)">
    dragover Event</button>
    <br>
    
    <h2> changing the properties through events </h2>
    
    <br>
    <button id="btn" (click)= "changeValue()">
    change value</button>
    <div *ngIf="value">
    <b>{{text}}</b>
    </div>

     <br>
    <h2> key board events </h2>
    <br>
    <div>
    <input type="text" (keyup)="fireKBEvenet($event)"
    placeholder="keyup event">
    </div>

    <br>
    <div>
    <input type="text" (keydown)="fireKBEvenet($event)"
    placeholder="keydown event">
    </div>

    <br>
    <div>
    <input type="text" (focus)="fireKBEvenet($event)"
    placeholder="focus">
    </div>

      <br>
    <div>
    <input type="text" (cut)="fireKBEvenet($event)"
    placeholder="cut">
    </div>

    <br>
    <div>
    <input type="text" (copy)="fireKBEvenet($event)"
    placeholder="copy">
    </div>

    <br>
    <div>
    <input type="text" (paste)="fireKBEvenet($event)"
    placeholder="paste">
    </div>

    <br>
    <div>
    <input type="text" (focus)="fireKBEvenet($event)"
    placeholder="focus">
    </div>

    <br>
    <h4>change the value of the property</h4>
    <div>
    <input type="text" (keyup)= "changeText($event)"
    placeholder="change text" value={{textToChange}}>
    </div>
    <h4>{{textToChange}}</h4>
    <hr>
    <h2>ng-model</h2>
    <br>

    <div class="form-group">
    <form>
    <div class="form-group">
        <label>Name</label>
        <input type="text" [(ngModel)]="name" name="name" class="form-control">
    </div>

    <div class="form-group">
        <label>Age</label>
        <input type="number" [(ngModel)]="age" name="age" class="form-control">
    </div>
    <input type="submit" value="Submit" class="btn btn-success">
    </form>

<h4>Name: {{name}} </h4>
<h4>Age: {{age}} </h4>

    </div>

    `
})
export class SandboxComponent4{

text:string = 'Hello World';
value:boolean = true;
textToChange:string = 'Hello';

name:string= '';
age:number =0;

fireEvent(e) {
    //console.log("button clicked");
   //console.log(greeting);
   //console.log(e.target.id);
   console.log(e.type);
}

changeValue() {
    console.log("change");
    //this.value = false;
    this.value = !this.value;
}

fireKBEvenet(e) {
    console.log(e.type)
}

changeText(e) {
    this.textToChange = e.target.value;
}

}