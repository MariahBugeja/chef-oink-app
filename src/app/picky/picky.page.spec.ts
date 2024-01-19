import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PickyPage } from './picky.page';

describe('PickyPage', () => {
  let component: PickyPage;
  let fixture: ComponentFixture<PickyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PickyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
