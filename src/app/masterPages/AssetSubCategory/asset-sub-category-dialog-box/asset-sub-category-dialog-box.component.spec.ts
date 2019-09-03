import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetSubCategoryDialogBoxComponent } from './asset-sub-category-dialog-box.component';

describe('AssetSubCategoryDialogBoxComponent', () => {
  let component: AssetSubCategoryDialogBoxComponent;
  let fixture: ComponentFixture<AssetSubCategoryDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetSubCategoryDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetSubCategoryDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
