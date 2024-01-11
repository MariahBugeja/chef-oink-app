import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  savoryItems = [
    { name: 'Savory Item 1', image: 'assets/4.png', selected: false },
    { name: 'Savory Item 2', image: 'assets/5.png', selected: false },
    { name: 'Savory Item 3', image: 'assets/6.png', selected: false },
    { name: 'Savory Item 4', image: 'assets/7.png', selected: false },
    { name: 'Savory Item 5', image: 'assets/8.png', selected: false },
    { name: 'Savory Item 6', image: 'assets/9.png', selected: false },
    { name: 'Savory Item 7', image: 'assets/10.png', selected: false },



  ];

  dessertItems = [
    { name: 'Dessert Item 1', image: 'assets/13.png', selected: false },
    { name: 'Dessert Item 2', image: 'assets/14.png', selected: false },
    { name: 'Dessert Item 3', image: 'assets/15.png', selected: false },
    { name: 'Dessert Item 4', image: 'assets/16.png', selected: false },
  ];

  toggleItem(item: any) {
    if (this.savoryItems.includes(item)) {
      item.selected = !item.selected;
    } else if (this.dessertItems.includes(item)) {
      item.selected = !item.selected;
    }
  }

  submitSelection() {
    const selectedSavoryItems = this.savoryItems.filter(item => item.selected);
    const selectedDessertItems = this.dessertItems.filter(item => item.selected);

    if (selectedSavoryItems.length === 4 && selectedDessertItems.length === 1) {
      console.log('Selected Savory Items:', selectedSavoryItems);
      console.log('Selected Dessert Item:', selectedDessertItems[0]);
    } else {
      console.error('Please select exactly 4 savory items and 1 dessert.');
    }
  }
 
}
