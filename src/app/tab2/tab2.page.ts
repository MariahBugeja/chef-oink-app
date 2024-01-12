import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  items: any[] = [
    { id:'cookie', name: 'Beef patty', description: 'Tasty beef patty', image: 'assets/8.png' },
    { id:'sausageroll',name:'Sausage roll', description: 'Delicious sausage roll', image: 'assets/4.png' },
    { id:'veggie',name:'Veggie patty', description: 'Healthy veggie patty', image: 'assets/5.png' },
    { id:'spinach', name:'Spinach patty', description: 'Healthy Spinach patty', image: 'assets/6.png' },
    { id:'meatpie',name:'Meat Pie', description: 'Delicious Meat Pie', image: 'assets/7.png' },
  ];

  searchTerm: string = '';
  searchResults: any[] = [];


  constructor(private router: Router) {} 

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

  onItemClick(item: any) {
    this.router.navigate(['/', item.id]);
  }
  
}

