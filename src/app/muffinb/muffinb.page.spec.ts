import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MuffinbPage } from './muffinb.page';

describe('MuffinbPage', () => {
  let component: MuffinbPage;
  let fixture: ComponentFixture<MuffinbPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MuffinbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
