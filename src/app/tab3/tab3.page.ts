import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  cartItems: any[] = [];
  totalAmount: number = 0;

  savoryItems = [
    { name: 'Savory Item 1', image: 'assets/4.png', selected: false, type: 'savory' },
    { name: 'Savory Item 2', image: 'assets/5.png', selected: false, type: 'savory' },
    { name: 'Savory Item 3', image: 'assets/6.png', selected: false, type: 'savory' },
    { name: 'Savory Item 4', image: 'assets/7.png', selected: false, type: 'savory' },
    { name: 'Savory Item 5', image: 'assets/8.png', selected: false, type: 'savory' },
    { name: 'Savory Item 6', image: 'assets/9.png', selected: false, type: 'savory' },
    { name: 'Savory Item 7', image: 'assets/10.png', selected: false, type: 'savory' },
  ];

  dessertItems = [
    { name: 'Dessert Item 1', image: 'assets/13.png', selected: false, type: 'dessert' },
    { name: 'Dessert Item 2', image: 'assets/14.png', selected: false, type: 'dessert' },
    { name: 'Dessert Item 3', image: 'assets/15.png', selected: false, type: 'dessert' },
    { name: 'Dessert Item 4', image: 'assets/16.png', selected: false, type: 'dessert' },
  ];

  selectedSavoryItems: any[] = [];
  selectedDessertItem: any = null;

  constructor(private router: Router) {}

  toggleItem(item: any) {
    if (item.type === 'savory') {
      this.toggleSavoryItem(item);
    } else if (item.type === 'dessert') {
      this.toggleDessertItem(item);
    }
  }

  private toggleSavoryItem(item: any) {
    const index = this.selectedSavoryItems.indexOf(item);

    if (index !== -1) {
      // if the item is already selected, remove it
      this.selectedSavoryItems.splice(index, 1);
      item.selected = false;
      console.log(this.selectedSavoryItems.length);
      return;
    }

    if (this.selectedSavoryItems.length >= 4) {
      // stop if there are already 4 items!
      item.selected = false;
      return;
    }

    this.selectedSavoryItems.push(item);
    item.selected = true;
    console.log(this.selectedSavoryItems.length);
  }

  private toggleDessertItem(item: any) {
    if (this.selectedDessertItem === item) {
      //  unselect it the dessert
      this.selectedDessertItem.selected = false;
      this.selectedDessertItem = null;
      return;
    }

    // unselect the previously selected dessert item
    if (this.selectedDessertItem) {
      this.selectedDessertItem.selected = false;
    }

    // select the new dessert item
    item.selected = true;
    this.selectedDessertItem = item;
  }

  submitSelection() {
    const selectedSavoryItems = this.savoryItems.filter(item => item.selected);
    const selectedDessertItems = this.dessertItems.filter(item => item.selected);
  
    if (selectedSavoryItems.length === 4 && selectedDessertItems.length === 1) {
      const selectedItemGroup = {
        name: 'Customized Meal',
        items: [...selectedSavoryItems, selectedDessertItems[0]],
        price: 8.50,
        quantity: 1,
        type: 'customizedMeal',
        savoryItems: selectedSavoryItems.map(item => item.name),
        dessertItem: selectedDessertItems[0].name
      };
  
      //  selected item group to the cart
      this.cartItems.push(selectedItemGroup);
  
      // Clear the selections
      this.clearSelections();
  
     
      this.updateLocalStorage();
      this.calculateTotal();
  
      
      this.router.navigate(['/addtocart']);
    } else {
      console.error('Please select exactly 4 savory items and 1 dessert.');
    }
  }
  

  // Add this method to clear the selections after adding to cart
  clearSelections() {
    this.savoryItems.forEach(item => item.selected = false);
    this.dessertItems.forEach(item => item.selected = false);
  }

  // Add this method to update local storage after modifying the cart
  updateLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  // Add this method to recalculate the total after modifying the cart
  calculateTotal() {
    this.totalAmount = this.cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }
}