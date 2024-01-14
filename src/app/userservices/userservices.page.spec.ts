import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserservicesPage } from './userservices.page';

describe('UserservicesPage', () => {
  let component: UserservicesPage;
  let fixture: ComponentFixture<UserservicesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserservicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
