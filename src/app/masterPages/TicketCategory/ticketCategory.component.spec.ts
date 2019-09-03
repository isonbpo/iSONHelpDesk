import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCategoryComponent } from './ticketCategory.component';

describe('TicketCategoryComponent', () => {
  let component: TicketCategoryComponent;
  let fixture: ComponentFixture<TicketCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
