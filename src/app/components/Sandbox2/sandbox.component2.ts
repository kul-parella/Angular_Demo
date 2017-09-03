import {Component} from '@angular/core';

@Component({
    selector:'sandbox2',
    templateUrl: './sandbox.component2.html',
    styleUrls:['./sandbox.component2.css']
    
    // styles: [`
    //     .special{
    //         color:green;
    //         font-size:20px;
    //         text-transform:uppercase
    //     }
    // `]
})
export class SandboxComponent2 {

imageUrl = 'http://lorempixel.com/400/200';

isUnchanged:boolean = false;

name:string = 'Buny Vall';

showName:boolean = false;

greeting:Number = 3;

people = ['Rick', 'Daryl', 'Carl', 'Glen'];

people2= [

    {
        firstname:'kul',
        lastname:'pare'
    }, 
    {
        firstname:'san',
        lastname:'para'
    }, 
    {
        firstname:'deepthi',
        lastname:'para'
    }, 
];

constructor() {
    this.people[2]= 'blacky';
}


}


