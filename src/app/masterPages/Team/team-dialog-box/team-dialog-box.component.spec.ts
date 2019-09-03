import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDialogBoxComponent } from './team-dialog-box.component';

describe('TeamDialogBoxComponent', () => {
  let component: TeamDialogBoxComponent;
  let fixture: ComponentFixture<TeamDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
