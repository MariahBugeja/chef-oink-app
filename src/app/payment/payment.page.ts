import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: 'payment.page.html',
  styleUrls: ['payment.page.scss'],
})
export class PaymentPage implements OnInit {
  paymentDetails: any = {
    cardHolderName: '',
    name: '',
    surname: '',
    address: '',
    town: '',
    postalCode: '',
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
  };

  cart: any[] = [];
  totalAmount: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state) {
      this.cart = state['cart'] || [];
      this.totalAmount = state['totalAmount'] || 0;
    }
  }

  addToCart(product: any) {
    this.cart.push(product);
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  calculateTotal(): number {
    return this.cart.reduce((total, product) => total + product.price * product.quantity, 0);
  }

  pay() {
    if (
      !this.paymentDetails.name ||
      !this.paymentDetails.surname ||
      !this.paymentDetails.address ||
      !this.paymentDetails.town ||
      !this.paymentDetails.postalCode ||
      !this.paymentDetails.cardHolderName ||
      !this.paymentDetails.cardNumber ||
      !this.paymentDetails.expirationDate ||
      !this.paymentDetails.securityCode
    ) {
      // Show an error message
      console.log('Please fill in all fields.');
      return;
    }

    // Proceed with payment
    const totalAmount = this.calculateTotal();
    console.log('Payment details:', this.paymentDetails);
    console.log('Items in the cart:', this.cart);
    console.log('Total Amount from AddtocartPage:', this.totalAmount);
    console.log('Calculated Cart Total:', totalAmount);

    const navigationExtras: NavigationExtras = {
      state: {
        paymentDetails: this.paymentDetails,
        cart: this.cart,
        totalAmount: totalAmount,
      },
    };

    this.router.navigate(['/paymentsuccesful'], navigationExtras);
  }

  formatCardNumber(event: any) {
    let cardNumber = event.target.value.replace(/\D/g, '');
    cardNumber = cardNumber.replace(/(\d{4})/g, '$1 ').trim();
    this.paymentDetails.cardNumber = cardNumber;
  }

  formatExpirationDate(event: any) {
    let expirationDate = event.target.value.replace(/\D/g, '');
    expirationDate = expirationDate.replace(/(\d{2})(\d{0,2})/, '$1/$2').trim();
    this.paymentDetails.expirationDate = expirationDate;
  }

  formatSecurityCode(event: any) {
    let securityCode = event.target.value.replace(/\D/g, '');
    this.paymentDetails.securityCode = securityCode;
  }

  validateAlphabeticInput(event: any, fieldName: string) {
    let inputValue = event.target.value.replace(/[^a-zA-Z ]/g, '');
    this.paymentDetails[fieldName] = inputValue;
  }

  navigateToConfirmationPage() {
    const totalAmount = this.calculateTotal();
    const navigationExtras: NavigationExtras = {
      state: {
        paymentDetails: this.paymentDetails,
        cart: this.cart,
        totalAmount: totalAmount,
      },
    };
    this.router.navigate(['/paymentsuccesful'], navigationExtras);
  }

  goBack() {
    this.router.navigate(['addtocart']);
  }
}
