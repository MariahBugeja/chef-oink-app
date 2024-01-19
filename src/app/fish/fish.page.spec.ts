import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FishPage } from './fish.page';

describe('FishPage', () => {
  let component: FishPage;
  let fixture: ComponentFixture<FishPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
