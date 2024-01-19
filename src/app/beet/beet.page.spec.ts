import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeetPage } from './beet.page';

describe('BeetPage', () => {
  let component: BeetPage;
  let fixture: ComponentFixture<BeetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BeetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
