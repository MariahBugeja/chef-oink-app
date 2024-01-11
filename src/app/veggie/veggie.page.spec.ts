import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VeggiePage } from './veggie.page';

describe('VeggiePage', () => {
  let component: VeggiePage;
  let fixture: ComponentFixture<VeggiePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VeggiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
