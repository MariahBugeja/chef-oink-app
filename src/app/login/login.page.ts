import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  Email: string = '';
  Password: string = '';
  error: string = '';

  constructor(private router: Router) {}

  login() {
    if (!this.Email || !this.Password) {
      this.error = 'Please fill in all fields.';
      return;
    }


    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(this.Email)) {
      this.error = 'Please enter a valid email address.';
      return;
    }

    this.router.navigate(['/tab1']); 
  }
}
