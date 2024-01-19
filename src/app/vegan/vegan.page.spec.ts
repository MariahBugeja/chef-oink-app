import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VeganPage } from './vegan.page';

describe('VeganPage', () => {
  let component: VeganPage;
  let fixture: ComponentFixture<VeganPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VeganPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
