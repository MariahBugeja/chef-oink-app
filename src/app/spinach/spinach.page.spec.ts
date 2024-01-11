import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinachPage } from './spinach.page';

describe('SpinachPage', () => {
  let component: SpinachPage;
  let fixture: ComponentFixture<SpinachPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SpinachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
