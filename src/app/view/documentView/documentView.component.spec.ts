import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentViewComponent } from './documentView.component';

describe('DocumentViewComponent', () => {
  let component: DocumentViewComponent;
  let fixture: ComponentFixture<DocumentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
