import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: 'payment.page.html',
  styleUrls: ['payment.page.scss'],
})
export class PaymentPage {
  paymentDetails: any = {
    name: '',
    surname: '',
    address: '',
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
  };

  purchasedProduct: any = {
    name: 'Customized Meal',
    price: 8.50,
    quantity: 1,
  };

  pay() {
    console.log('Payment details:', this.paymentDetails);
    console.log('Purchased product:', this.purchasedProduct);
  }
}
