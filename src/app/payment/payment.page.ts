import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: 'payment.page.html',
  styleUrls: ['payment.page.scss'],
})
export class PaymentPage {
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

  purchasedProduct: any = {
    name: 'Customized Meal',
    price: 8.50,
    quantity: 1,
  };

  pay() {
    console.log('Payment details:', this.paymentDetails);
    console.log('Purchased product:', this.purchasedProduct);
  }

  formatCardNumber(event: any) {
    // Remove non-numeric characters
    let cardNumber = event.target.value.replace(/\D/g, '');

    // Add spaces every four digits
    cardNumber = cardNumber.replace(/(\d{4})/g, '$1 ').trim();

    // Update the input value
    this.paymentDetails.cardNumber = cardNumber;
  }

  formatExpirationDate(event: any) {
    // Remove non-numeric characters
    let expirationDate = event.target.value.replace(/\D/g, '');

    // Add a slash between month and year
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
  
}
