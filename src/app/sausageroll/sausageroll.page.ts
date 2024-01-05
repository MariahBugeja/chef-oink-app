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
    const selectedItem = {
      name: 'sausage roll',
      price: 3.00,
      quantity: this.quantity,
      imageUrl: 'assets/4.png', 
    };

    this.cartItems.push(selectedItem);

    // Save the updated cart items 
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
