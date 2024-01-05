import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.page.html',
  styleUrls: ['./addtocart.page.scss'],
})
export class AddtocartPage implements OnInit {
  cartItems: any[] = [];
  totalAmount: number = 0;

  constructor() {}

  ngOnInit() {
    const cartItemsString = localStorage.getItem('cartItems');
    if (cartItemsString) {
      this.cartItems = JSON.parse(cartItemsString);
    } else {
      this.cartItems = []; 
    }
    this.calculateTotal();
  }

  calculateTotal() {

    this.totalAmount = this.cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }
}