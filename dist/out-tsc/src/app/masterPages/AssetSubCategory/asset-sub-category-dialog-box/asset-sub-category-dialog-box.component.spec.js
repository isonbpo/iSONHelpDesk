import { async, TestBed } from '@angular/core/testing';
import { AssetSubCategoryDialogBoxComponent } from './asset-sub-category-dialog-box.component';
describe('AssetSubCategoryDialogBoxComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AssetSubCategoryDialogBoxComponent]
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
//# sourceMappingURL=asset-sub-category-dialog-box.component.spec.js.map