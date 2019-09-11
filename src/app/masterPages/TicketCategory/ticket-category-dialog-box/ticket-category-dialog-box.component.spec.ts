import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCategoryDialogBoxComponent } from './ticket-category-dialog-box.component';

describe('TicketCategoryDialogBoxComponent', () => {
  let component: TicketCategoryDialogBoxComponent;
  let fixture: ComponentFixture<TicketCategoryDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketCategoryDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCategoryDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
