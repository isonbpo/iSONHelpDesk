import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetSubCategoryComponent } from './assetSubCategory.component';

describe('AssetSubCategoryComponent', () => {
  let component: AssetSubCategoryComponent;
  let fixture: ComponentFixture<AssetSubCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetSubCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
