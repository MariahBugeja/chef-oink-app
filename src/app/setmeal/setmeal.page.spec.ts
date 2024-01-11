import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SetmealPage } from './setmeal.page';

describe('SetmealPage', () => {
  let component: SetmealPage;
  let fixture: ComponentFixture<SetmealPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SetmealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
