import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
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
      // if the dessert item is already selected, unselect it
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
  }
}
