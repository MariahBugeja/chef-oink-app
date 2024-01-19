import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PnutPage } from './pnut.page';

describe('PnutPage', () => {
  let component: PnutPage;
  let fixture: ComponentFixture<PnutPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PnutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
