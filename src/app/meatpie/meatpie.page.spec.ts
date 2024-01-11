import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeatpiePage } from './meatpie.page';

describe('MeatpiePage', () => {
  let component: MeatpiePage;
  let fixture: ComponentFixture<MeatpiePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MeatpiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
