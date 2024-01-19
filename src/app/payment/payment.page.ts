import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

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
  
  isFormValid: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const state = this.router.getCurrentNavigation()?.extras.state;

    // If information is available, update the cart and totalAmount
    if (state) {
      this.cart = state['cart'] || [];
      this.totalAmount = state['totalAmount'] || 0;
    }
  }

  //  to add a product to the shopping cart
  addToCart(product: any) {
    this.cart.push(product);
  }

  //  to remove a product from the shopping cart
  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  //  to calculate the total amount of the shopping cart
  calculateTotal(): number {
    return this.cart.reduce((total, product) => total + product.price * product.quantity, 0);
  }

  //  to handle the payment process
  pay() {
    // Check if the form is not valid and display an error message if so
    if (!this.isFormValid) {
      console.log('Please fill in all required fields.');
      return;
    }

    // Proceed with payment and log the details
    const totalAmount = this.calculateTotal();
    console.log('Payment details:', this.paymentDetails);
    console.log('Items in the cart:', this.cart);
    console.log('Total Amount from AddtocartPage:', this.totalAmount);
    console.log('Calculated Cart Total:', totalAmount);

    // Set up navigation extras with payment details, cart, and totalAmount
    const navigationExtras: NavigationExtras = {
      state: {
        paymentDetails: this.paymentDetails,
        cart: this.cart,
        totalAmount: totalAmount,
      },
    };

    // Navigate to the paymentsuccessful page with extras
    this.router.navigate(['/paymentsuccessful'], navigationExtras);
  }

  //  to format the card number input
  formatCardNumber(event: any) {
    let cardNumber = event.target.value.replace(/\D/g, '');
    cardNumber = cardNumber.replace(/(\d{4})/g, '$1 ').trim();
    this.paymentDetails.cardNumber = cardNumber;
    this.checkFormValidity();
  }

  //  to format the expiration date input
  formatExpirationDate(event: any) {
    let expirationDate = event.target.value.replace(/\D/g, '');
    expirationDate = expirationDate.replace(/(\d{2})(\d{0,2})/, '$1/$2').trim();
    this.paymentDetails.expirationDate = expirationDate;
    this.checkFormValidity();
  }

  //  to format the security code input
  formatSecurityCode(event: any) {
    let securityCode = event.target.value.replace(/\D/g, '');
    this.paymentDetails.securityCode = securityCode;
    this.checkFormValidity();
  }

  //  to validate alphabetic input for name and address fields
  validateAlphabeticInput(event: any, fieldName: string) {
    let inputValue = event.target.value.replace(/[^a-zA-Z ]/g, '');
    this.paymentDetails[fieldName] = inputValue;
    this.checkFormValidity();
  }

  //  to check the overall form validity
  checkFormValidity() {
    // Check if all required fields are filled
    this.isFormValid = !Object.values(this.paymentDetails).some(val => val === '' || val === undefined);
  }

  //  to navigate to the payment successful page
  navigateToConfirmationPage() {
    // Calculate total amount and set up navigation extras
    const totalAmount = this.calculateTotal();
    const navigationExtras: NavigationExtras = {
      state: {
        paymentDetails: this.paymentDetails,
        cart: this.cart,
        totalAmount: totalAmount,
      },
    };

    // Navigate to the paymentsuccessful page with extras
    this.router.navigate(['/paymentsuccessful'], navigationExtras);
  }

  //  to go back to the add to cart page
  goBack() {
    this.router.navigate(['addtocart']);
  }
}
