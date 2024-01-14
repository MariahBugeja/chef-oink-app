import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { AddtocartPage } from './addtocart.page';

describe('AddtocartPage', () => {
  let component: AddtocartPage;
  let fixture: ComponentFixture<AddtocartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddtocartPage],
      imports: [IonicModule.forRoot(), RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AddtocartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load cart items on ngOnInit', () => {
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify([{ name: 'Item 1', price: 10, quantity: 2 }]));
    component.ngOnInit();
    expect(component.cartItems.length).toBe(1);
    expect(component.totalAmount).toBe(20);
  });

  it('should delete item from cart', () => {
    const item = { name: 'Item 1', price: 10, quantity: 2 };
    component.cartItems = [item];
    spyOn(localStorage, 'setItem');
    component.deleteItem(item);
    expect(component.cartItems.length).toBe(0);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '[]');
  });

  it('should decrease quantity of an item', () => {
    const item = { name: 'Item 1', price: 10, quantity: 2 };
    component.cartItems = [item];
    spyOn(localStorage, 'setItem');
    component.decreaseQuantity(item);
    expect(item.quantity).toBe(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', JSON.stringify([{ name: 'Item 1', price: 10, quantity: 1 }]));
  });

  it('should increase quantity of an item', () => {
    const item = { name: 'Item 1', price: 10, quantity: 2 };
    component.cartItems = [item];
    spyOn(localStorage, 'setItem');
    component.increaseQuantity(item);
    expect(item.quantity).toBe(3);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', JSON.stringify([{ name: 'Item 1', price: 10, quantity: 3 }]));
  });

  it('should not increase quantity beyond the limit', () => {
    const item = { name: 'Item 1', price: 10, quantity: 5 };
    component.cartItems = [item];
    spyOn(console, 'log');
    component.increaseQuantity(item);
    expect(item.quantity).toBe(5);
    expect(console.log).toHaveBeenCalledWith('Quantity limit reached (max: 5)');
  });

  it('should calculate total amount correctly after deleting an item', () => {
    const item = { name: 'Item 1', price: 10, quantity: 2 };
    component.cartItems = [item];
    component.deleteItem(item);
    expect(component.totalAmount).toBe(0);
  });

  it('should calculate total amount correctly after decreasing quantity', () => {
    const item = { name: 'Item 1', price: 10, quantity: 2 };
    component.cartItems = [item];
    component.decreaseQuantity(item);
    expect(component.totalAmount).toBe(10);
  });

  it('should calculate total amount correctly after increasing quantity', () => {
    const item = { name: 'Item 1', price: 10, quantity: 2 };
    component.cartItems = [item];
    component.increaseQuantity(item);
    expect(component.totalAmount).toBe(30);
  });
});
