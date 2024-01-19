import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChocPage } from './choc.page';

describe('ChocPage', () => {
  let component: ChocPage;
  let fixture: ComponentFixture<ChocPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
