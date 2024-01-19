import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceTsService {

  private registeredUsers: Map<string, string> = new Map<string, string>();

  registerUser(email: string, password: string): void {
    this.registeredUsers.set(email, password);
  }

  loginUser(email: string, password: string): boolean {
    const storedPassword = this.registeredUsers.get(email);
    return storedPassword !== undefined && storedPassword === password;
  }
}