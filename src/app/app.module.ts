import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms'
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {SandboxComponent} from './components/Sandbox1/sandbox.component';
import{SandboxComponent2} from './components/Sandbox2/sandbox.component2';
import {SandboxComponent3} from './components/Sandbox3/sandbox.component3';
import {SandboxComponent32} from './components/Sandbox3/sandbox.component32';
import {SandboxComponent4} from './components/Sandbox4/sandbox.component4';
import {SandboxComponent5} from './components/Sandbox5/sandbox.component5';
import {SandboxComponent6} from './components/Sandbox6/sandbox.component6';
import {SandboxComponent62} from './components/Sandbox6/sandbox.component62';

import {DataService} from './services/data.service';
import {DataService2} from './services/data.service2';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';


const appRoutes: Routes=[
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'user/:id', component:UserDetailsComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    SandboxComponent2,
    SandboxComponent3,
    SandboxComponent32,
    SandboxComponent4,
    SandboxComponent5,
    SandboxComponent6,
    SandboxComponent62,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService, DataService2],
  bootstrap: [AppComponent]
})
export class AppModule { }
