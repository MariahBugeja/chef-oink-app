import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sausageroll',
  templateUrl: './sausageroll.page.html',
  styleUrls: ['./sausageroll.page.scss'],
})
export class SausagerollPage  {
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
    const selectedItem: any = {
      name: 'Sausage Roll',
      price: 3.00,
      quantity: this.quantity,
      imageUrl: "assets/4.png",
    };
  
    // Load existing cart items
    const cartItemsString = localStorage.getItem('cartItems');
    let cartItems: any[] = cartItemsString ? JSON.parse(cartItemsString) : [];
  
    // Check if the selected item is already in the cart
    const existingItemIndex = cartItems.findIndex((item: any) => item.name === selectedItem.name);
  
    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += this.quantity;
    } else {
      cartItems.push(selectedItem);
    }
  
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
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
