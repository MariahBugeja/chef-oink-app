import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignIn2Page } from './sign-in2.page';

describe('SignIn2Page', () => {
  let component: SignIn2Page;
  let fixture: ComponentFixture<SignIn2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SignIn2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
