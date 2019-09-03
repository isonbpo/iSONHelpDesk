import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleDialogBoxComponent } from './role-dialog-box.component';

describe('RoleDialogBoxComponent', () => {
  let component: RoleDialogBoxComponent;
  let fixture: ComponentFixture<RoleDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
