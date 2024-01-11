import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meatpie',
  templateUrl: './meatpie.page.html',
  styleUrls: ['./meatpie.page.scss'],
})
export class MeatpiePage  {

  
  selectedSegment: string = 'description';
  quantity: number = 1;
  maxQuantity: number = 5;
  cartItems: any[] = []; 

  constructor(private navCtrl: NavController, private router: Router) {}

  ngOnInit() {
    const cartItemsString = localStorage.getItem('cartItems');
    if (cartItemsString) {
      this.cartItems = JSON.parse(cartItemsString);
    }
  }

  goBack() {
    this.router.navigate(['/tabs/tab1']);
  }

  addtoCart() {
    const selectedItem = {
      name: 'Miet pie',
      price: 4.50,
      quantity: this.quantity,
      imageUrl: "assets/7.png",
    };
  
    const existingItemIndex = this.cartItems.findIndex(item => item.name === selectedItem.name);
  
    if (existingItemIndex !== -1) {
      this.cartItems[existingItemIndex].quantity += this.quantity;
    } else {
      this.cartItems.push(selectedItem);
    }
  
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  
    this.router.navigate(['/addtocart']);
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




