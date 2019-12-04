import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['auth.component.css']
})


export class AuthComponent {
    username : string; 
    password : string;
    errorMeassage: string; // to display msgs when there is error
    constructor(private router : Router) {

    }
    
    authenticate(form: NgForm) {
        if(form.valid) {
            // perform authentication
            this.router.navigateByUrl("/admin/main")
        } else {
            this.errorMeassage ="Form Data Inavalid";
        }
    }
}