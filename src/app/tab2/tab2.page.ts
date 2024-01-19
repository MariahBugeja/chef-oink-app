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
    { id:'vegan',name:'Vegan Meal', description: 'Delicious Meal', image: 'assets/set2.png' },
    { id:'picky',name:'Picky Eater Meal', description: 'Delicious Meal', image: 'assets/set1.png' },
    { id:'oat',name:'Oatmeal Cookie', description: 'Delicious Cookie', image: 'assets/16.png' },
    { id:'muffinb',name:'Banana Muffin', description: 'Delicious Muffin', image: 'assets/15.png' },
    { id:'choc',name:'Choc Muffin', description: 'Delicious Muffin', image: 'assets/13.png' },
    { id:'brownie',name:'Choc Brownie', description: 'Delicious Brownie', image: 'assets/14.png' },
    { id:'beet',name:'Beetroot Patty', description: 'Delicious Patty', image: 'assets/9.png' },
    { id:'fish',name:'Fish Finger', description: 'Delicious Fish', image: 'assets/10.png' },
    { id:'pnut',name:'Peanut Swirl', description: 'Delicious Swirl', image: 'assets/11.png' },



  ];

  searchTerm: string = '';
  searchResults: any[] = [];


  constructor(private router: Router) {} 

  onSearch(event: any) {
    this.searchTerm = event.target.value.toLowerCase().trim();

    //search
    if (this.searchTerm) {
      this.searchResults = this.items.filter(item =>
        item.name.toLowerCase().includes(this.searchTerm)
      );
    } else {
      this.searchResults = [];
    }
  }
//goes to the selected items page
  onItemClick(item: any) {
    this.router.navigate(['/', item.id]);
  }
  
}

