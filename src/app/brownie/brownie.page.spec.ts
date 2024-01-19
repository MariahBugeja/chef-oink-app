import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowniePage } from './brownie.page';

describe('BrowniePage', () => {
  let component: BrowniePage;
  let fixture: ComponentFixture<BrowniePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BrowniePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
