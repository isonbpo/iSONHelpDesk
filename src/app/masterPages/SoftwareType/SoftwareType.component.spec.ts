import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {SoftwareTypeComponent} from './SoftwareType.component';

describe('SoftwareTypeComponent', () => {
  let component: SoftwareTypeComponent;
  let fixture: ComponentFixture<SoftwareTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
