import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/userservices/userservices.page'; 

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage {
  name: string = '';
  username: string = '';
  error: string = '';
  phoneNumber: string = '';

  constructor(private router: Router, private userService: UserService) {}

  signIn() {
    if (!this.name.trim() || !this.phoneNumber.trim() || !this.username.trim()) {
      this.error = 'Please fill in all fields.';
      return;
    }

    if (this.username.length < 8 || !this.containsTwoNumbers(this.username)) {
      this.error = 'Username must be at least 8 characters long and contain at least 2 numbers.';
      return;
    }

    // Ensure that phoneNumber contains only digits and has a minimum length of 8
    const phoneNumberRegex = /^\d{8,}$/;
    if (!phoneNumberRegex.test(this.phoneNumber)) {
      this.error = 'Phone number must contain only digits and have a minimum length of 8.';
      return;
    }

    this.error = '';

    // Save data
    this.userService.setUserData(this.name, this.phoneNumber, this.username);

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
