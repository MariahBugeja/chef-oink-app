import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OatPage } from './oat.page';

describe('OatPage', () => {
  let component: OatPage;
  let fixture: ComponentFixture<OatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
