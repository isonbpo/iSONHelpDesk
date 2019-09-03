import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketSubCategoryDialogBoxComponent } from './ticket-sub-category-dialog-box.component';

describe('TicketSubCategoryDialogBoxComponent', () => {
  let component: TicketSubCategoryDialogBoxComponent;
  let fixture: ComponentFixture<TicketSubCategoryDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketSubCategoryDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketSubCategoryDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
