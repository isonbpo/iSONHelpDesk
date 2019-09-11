import { async, TestBed } from '@angular/core/testing';
import { SoftwareTypeDialogBoxComponent } from './software-type-dialog-box.component';
describe('SoftwareTypeDialogBoxComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SoftwareTypeDialogBoxComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SoftwareTypeDialogBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=software-type-dialog-box.component.spec.js.map