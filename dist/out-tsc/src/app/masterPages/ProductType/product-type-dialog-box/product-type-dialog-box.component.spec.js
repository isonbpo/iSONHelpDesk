import { async, TestBed } from '@angular/core/testing';
import { ProductTypeDialogBoxComponent } from './product-type-dialog-box.component';
describe('ProductTypeDialogBoxComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProductTypeDialogBoxComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ProductTypeDialogBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=product-type-dialog-box.component.spec.js.map