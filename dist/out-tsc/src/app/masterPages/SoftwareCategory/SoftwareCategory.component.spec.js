import { async, TestBed } from '@angular/core/testing';
import { SoftwareCategoryComponent } from './SoftwareCategory.component';
describe('SoftwareCategoryComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SoftwareCategoryComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SoftwareCategoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=SoftwareCategory.component.spec.js.map