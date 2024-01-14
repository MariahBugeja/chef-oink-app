import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userData: {
    name: string;
    surname: string;
    username: string;
    email?: string;
    phone?: string;
    address?: string;
  } = {
    name: '',
    surname: '',
    username: ''
  };

  setUserData(name: string, surname: string, username: string) {
    this.userData = { name, surname, username };
  }

  getUserData() {
    return { ...this.userData };
  }
}