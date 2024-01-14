import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.page.html',
  styleUrls: ['./addtocart.page.scss'],
})
export class AddtocartPage implements OnInit {
  cartItems: any[] = [];
  totalAmount: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadCartItems();
  }

  loadCartItems() {
    const cartItemsString = localStorage.getItem('cartItems');
    if (cartItemsString) {
      this.cartItems = JSON.parse(cartItemsString);
      this.calculateTotal();
    } else {
      this.cartItems = [];
      this.totalAmount = 0;
    }
  }

  calculateTotal() {
    this.totalAmount = this.cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }

  deleteItem(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      this.calculateTotal();
    }
  }
  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateLocalStorage();
      this.calculateTotal();
    }
  }
  increaseQuantity(item: any) {
    if (item.quantity < 5) {
      item.quantity++;
      this.updateLocalStorage();
      this.calculateTotal();
    } else {
      console.log('Quantity limit reached (max: 5)');
    }
  }
  
  updateLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
  
  checkout() {
    this.router.navigate(['/payment'], {
      state: {
        cart: this.cartItems,
        totalAmount: this.totalAmount,
      },
    });
  }

  goBack() {
    this.router.navigate(['/tabs/tab1']);
  }
}
