import {Component} from '@angular/core'

@Component({
    selector: 'Sandbox5',
    template:`<h4>form submission and validation</h4>
    <br>

    <form (submit)="onSubmit()">
        <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control"
            [(ngModel)]="name" name="name">
        </div>    
        <input type="submit" class="btn btn-success"
        value="submit">
    </form>

    <hr>
    <ul class="list-group">
        <li class="list-group-item" *ngFor="let user of users">{{
            user
        }}</li>
    </ul>

    <hr>
    <h2>Validation</h2>
    <br>
    <form novalidate #f="ngForm" (ngSubmit)="onSubmitForm(f)">
        <div class="form-group">
            <label>Name</label>           
            <input type="text" 
            class="form-control"
            [(ngModel)]="user.name"
            name="name"
            #userName="ngModel"
            minlength="2"
            required>
        </div>

        <div class="alert alert-danger" 
        *ngIf="userName.errors?.required 
        && userName.touched">Name is required
        </div>

        <div *ngIf="userName.errors?.minlength 
        && userName.touched" class="alert alert-danger" >Name should be atleast 2 charaters
        </div>

          <div class="form-group">
            <label>Email</label>
            <input type="text" 
            class="form-control"
            [(ngModel)]="user.email"
            name="email"
            #userEmail="ngModel"
            required>
        </div>

         <div class="alert alert-danger" 
        *ngIf="userEmail.errors?.required 
        && userEmail.touched">Email is required
        </div>

          <div class="form-group">
            <label>Phone</label>
            <input type="text" 
            class="form-control"
            [(ngModel)]="user.phone"
            name="phone"
            #userPhone="ngModel"
            minlength="10"
            >
        <div *ngIf="userPhone.errors?.minlength 
        && userPhone.touched" class="alert alert-danger" >Enter a valid phone number
        </div>
        </div>

        <input type="submit" class="btn btn-success"
        value="Submit">

    </form>



    `
})
export class SandboxComponent5 {
    name:string='';
    users:string[] =['john doe','mary swanson', 'kevin mario']

    user= {
        name: '',
        email: '',
        phone: ''
    }


    onSubmit() {
        console.log(this.name)
        this.users.push(this.name);
        this.name= '';
    }

    onSubmitForm({value, valid}) {
        if(valid){
            //{name: "kula", email: "k@gmail.com", phone: "7897897898"}
            console.log(value);     
        } else {
            console.log('form is invalid');
        }
    }

}