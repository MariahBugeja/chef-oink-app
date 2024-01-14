import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedDataServicePage } from './shared-data-service.page';

describe('SharedDataServicePage', () => {
  let component: SharedDataServicePage;
  let fixture: ComponentFixture<SharedDataServicePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SharedDataServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
