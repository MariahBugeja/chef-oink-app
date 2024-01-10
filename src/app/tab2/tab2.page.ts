import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  items: any[] = [
    { name: 'Beef patty', description: 'Tasty beef patty', image: 'assets/8.png' },
    { name: 'Sausage roll', description: 'Delicious sausage roll', image: 'assets/4.png' },
    { name: 'Veggie patty', description: 'Healthy veggie patty', image: 'assets/5.png' },
  ];

  searchTerm: string = '';
  searchResults: any[] = [];

  constructor() {}

  onSearch(event: any) {
    this.searchTerm = event.target.value.toLowerCase().trim();

    if (this.searchTerm) {
      this.searchResults = this.items.filter(item =>
        item.name.toLowerCase().includes(this.searchTerm)
      );
    } else {
      this.searchResults = [];
    }
  }
}
