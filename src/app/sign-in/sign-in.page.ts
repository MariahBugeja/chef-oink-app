import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage {
  name: string = '';
  surname: string = '';
  username: string = '';
  error: string = '';

  constructor(private router: Router) {}

  signIn() {
    if (!this.name.trim() || !this.surname.trim() || !this.username.trim()) {
      this.error = 'Please fill in all fields.';
      return;
    }

    if (this.username.length < 8 || !this.containsTwoNumbers(this.username)) {
      this.error = 'Username must be at least 8 characters long and contain at least 2 numbers.';
      return;
    }

    
    this.error = '';

    // Navigate to the next page after validation
    this.router.navigate(['/sign-in2']);
  }

  containsTwoNumbers(str: string): boolean {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(Number(str[i]))) {
        count++;
      }
    }
    return count >= 2;
  }
}
