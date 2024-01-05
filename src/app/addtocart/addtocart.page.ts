import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.page.html',
  styleUrls: ['./addtocart.page.scss'],
})
export class AddtocartPage implements OnInit {
  selectedItem: any = {}; 
  totalAmount: number = 0; 

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const item = params.get('item');
      if (item) {
        this.selectedItem = JSON.parse(item);
        this.calculateTotal(); 
      } else {
        console.error('No item found in parameters.');
      }
    });
  }

  calculateTotal() {
    this.totalAmount = this.selectedItem.price * this.selectedItem.quantity;
  }
}
