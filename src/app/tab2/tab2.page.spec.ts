import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab3Page } from './tabs/tab3.page';

describe('Tab3Page', () => {
  let component: Tab3Page;
  let fixture: ComponentFixture<Tab3Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab3Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Tab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize selectedSavoryItems and selectedDessertItem', () => {
    expect(component.selectedSavoryItems).toBeDefined();
    expect(component.selectedSavoryItems.length).toBe(0);
    expect(component.selectedDessertItem).toBeNull();
  });

  it('should toggle savory items correctly', () => {
    const savoryItem = { name: 'Savory Item 1', image: 'assets/4.png', selected: false, type: 'savory' };

    component.toggleItem(savoryItem);

    expect(savoryItem.selected).toBeTruthy();
    expect(component.selectedSavoryItems.length).toBe(1);
  });

  it('should toggle dessert item correctly', () => {
    const dessertItem = { name: 'Dessert Item 1', image: 'assets/13.png', selected: false, type: 'dessert' };

    component.toggleItem(dessertItem);

    expect(dessertItem.selected).toBeTruthy();
    expect(component.selectedDessertItem).toBe(dessertItem);
  });

  it('should unselect dessert item when selected again', () => {
    const dessertItem = { name: 'Dessert Item 1', image: 'assets/13.png', selected: false, type: 'dessert' };

    component.toggleItem(dessertItem);
    component.toggleItem(dessertItem);

    expect(dessertItem.selected).toBeFalsy();
    expect(component.selectedDessertItem).toBeNull();
  });

  it('should not exceed the limit of 4 savory items', () => {
    const savoryItem1 = { name: 'Savory Item 1', image: 'assets/4.png', selected: false, type: 'savory' };
    const savoryItem2 = { name: 'Savory Item 2', image: 'assets/5.png', selected: false, type: 'savory' };
    const savoryItem3 = { name: 'Savory Item 3', image: 'assets/6.png', selected: false, type: 'savory' };
    const savoryItem4 = { name: 'Savory Item 4', image: 'assets/7.png', selected: false, type: 'savory' };
    const savoryItem5 = { name: 'Savory Item 5', image: 'assets/8.png', selected: false, type: 'savory' };

    component.toggleItem(savoryItem1);
    component.toggleItem(savoryItem2);
    component.toggleItem(savoryItem3);
    component.toggleItem(savoryItem4);
    component.toggleItem(savoryItem5);

    expect(savoryItem5.selected).toBeFalsy();
    expect(component.selectedSavoryItems.length).toBe(4);
  });

  it('should not submit selections with no items selected', () => {
    spyOn(console, 'error');
    spyOn(component['router'], 'navigate');

    component.submitSelection();

    expect(console.error).toHaveBeenCalledWith('Please select exactly 4 savory items and 1 dessert.');
    expect(component['router'].navigate).not.toHaveBeenCalledWith(['/addtocart']);
  });
});
