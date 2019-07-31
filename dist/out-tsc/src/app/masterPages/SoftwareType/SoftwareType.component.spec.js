import { async, TestBed } from '@angular/core/testing';
import { SoftwareTypeComponent } from './SoftwareType.component';
describe('SoftwareTypeComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SoftwareTypeComponent]
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
//# sourceMappingURL=SoftwareType.component.spec.js.map