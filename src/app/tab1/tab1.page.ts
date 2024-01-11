import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  meals = [
    { image: 'assets/4.png', alt: 'Image 4', caption: 'Set Meal 1' },
    { image: 'assets/5.png', alt: 'Image 5', caption: 'Set Meal 2' },
    { image: 'assets/6.png', alt: 'Image 6', caption: 'Set Meal 3' },
    { image: 'assets/7.png', alt: 'Image 7', caption: 'Set Meal 4' },
    { image: 'assets/8.png', alt: 'Image 8', caption: 'Set Meal 5' },
    { image: 'assets/9.png', alt: 'Image 9', caption: 'Set Meal 6' }
  ];

  selectedLocation: string = 'default'; 

  ngOnInit() {
    const savedLocation = localStorage.getItem('selectedLocation');
    if (savedLocation) {
      this.selectedLocation = savedLocation;
    }
  }

  onLocationChange() {
    localStorage.setItem('selectedLocation', this.selectedLocation);
  }
  
}