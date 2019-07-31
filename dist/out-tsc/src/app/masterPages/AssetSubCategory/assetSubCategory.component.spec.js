import { async, TestBed } from '@angular/core/testing';
import { AssetSubCategoryComponent } from './assetSubCategory.component';
describe('AssetSubCategoryComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AssetSubCategoryComponent]
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
//# sourceMappingURL=assetSubCategory.component.spec.js.map