import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CookiePage } from './cookie.page';

describe('CookiePage', () => {
  let component: CookiePage;
  let fixture: ComponentFixture<CookiePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CookiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
