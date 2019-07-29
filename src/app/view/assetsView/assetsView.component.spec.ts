import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsViewComponent } from './assetsView.component';

describe('AssetsViewComponent', () => {
  let component: AssetsViewComponent;
  let fixture: ComponentFixture<AssetsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
