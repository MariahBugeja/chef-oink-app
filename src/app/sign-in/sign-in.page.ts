import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UserService } from 'src/app/userservices/userservices.page';
import { SignInPage } from './sign-in.page';

describe('SignInPage', () => {
  let component: SignInPage;
  let fixture: ComponentFixture<SignInPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInPage],
      providers: [UserService, { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }]
    });

    fixture = TestBed.createComponent(SignInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to sign-in2 on successful sign-in', () => {
    spyOn(component.userService, 'setUserData');

    component.name = 'Mariah Bug';
    component.phoneNumber = '12345678';
    component.username = 'Mariah1234';

    component.signIn();

    expect(component.userService.setUserData).toHaveBeenCalled();
    expect(component.router.navigate).toHaveBeenCalledWith(['/sign-in2']);
  });

  it('should show error message for missing fields', () => {
    spyOn(component.userService, 'setUserData');

    component.signIn();

    expect(component.error).toBeTruthy();
    expect(component.userService.setUserData).not.toHaveBeenCalled();
    expect(component.router.navigate).not.toHaveBeenCalled();
  });

  it('should show error message for invalid username', () => {
    spyOn(component.userService, 'setUserData');

    component.name = 'Mariah Bug';
    component.phoneNumber = '12345678';
    component.username = 'Mariah'; 

    component.signIn();

    expect(component.error).toBeTruthy();
    expect(component.userService.setUserData).not.toHaveBeenCalled();
    expect(component.router.navigate).not.toHaveBeenCalled();
  });
});
