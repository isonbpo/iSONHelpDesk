import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketSubCategoryComponent } from './ticketSubCategory.component';

describe('TicketSubCategoryComponent', () => {
  let component: TicketSubCategoryComponent;
  let fixture: ComponentFixture<TicketSubCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketSubCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
