// tab4.page.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/userservices/userservices.page'; 

interface UserProfile {
  name: string;
  surname: string;
  username: string;
  email?: string;
  phone?: string;
  address?: string;
}

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  userProfile: UserProfile = {
    name: '',
    surname: '',
    username: '',
    email: '',
    phone: '',
    address: '',
  };

  orderStatus: string = 'Shipped'; 

  constructor(private userService: UserService) {}

  ngOnInit() {
   
    const userData = this.userService.getUserData();

   
    this.userProfile = {
      name: userData.name,
      surname: userData.surname,
      username: userData.username,
      email: userData.email,
      phone: userData.phone,
      address: userData.address,
    };

    setTimeout(() => {
      this.orderStatus = 'Delivered';
    }, 1 * 60 * 1000); 
  }

  editProfile() {
    console.log('Navigate to edit profile page');
  }
}
