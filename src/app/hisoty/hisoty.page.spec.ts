import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HisotyPage } from './hisoty.page';

describe('HisotyPage', () => {
  let component: HisotyPage;
  let fixture: ComponentFixture<HisotyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HisotyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
