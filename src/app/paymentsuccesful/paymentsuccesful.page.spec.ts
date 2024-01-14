import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentsuccesfulPage } from './paymentsuccesful.page';

describe('PaymentsuccesfulPage', () => {
  let component: PaymentsuccesfulPage;
  let fixture: ComponentFixture<PaymentsuccesfulPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaymentsuccesfulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
