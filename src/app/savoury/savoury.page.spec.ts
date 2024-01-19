import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SavouryPage } from './savoury.page';

describe('SavouryPage', () => {
  let component: SavouryPage;
  let fixture: ComponentFixture<SavouryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SavouryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
