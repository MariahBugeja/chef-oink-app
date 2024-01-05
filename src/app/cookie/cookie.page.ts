import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.page.html',
  styleUrls: ['./cookie.page.scss'],
}) 
export class CookiePage {
  selectedSegment: string = 'description';
  quantity: number = 1; 
  maxQuantity: number = 5; 

  constructor(private navCtrl: NavController, private router: Router) {}

  goBack() {
    this.router.navigate(['/tabs/tab1']); 
  }

  addtoCart() {
    const selectedItem = {
      name: 'Beef Patty',
      price: 2.00,
      quantity: this.quantity, 
    };

    this.router.navigate(['/addtocart', { item: JSON.stringify(selectedItem) }]);
  }


  increaseQuantity() {
    if (this.quantity < this.maxQuantity) {
      this.quantity++;
    }
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
