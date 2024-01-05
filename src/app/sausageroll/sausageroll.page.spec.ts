import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SausagerollPage } from './sausageroll.page';

describe('SausagerollPage', () => {
  let component: SausagerollPage;
  let fixture: ComponentFixture<SausagerollPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SausagerollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
