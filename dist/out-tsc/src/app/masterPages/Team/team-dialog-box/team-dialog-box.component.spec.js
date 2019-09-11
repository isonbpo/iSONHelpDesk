import { async, TestBed } from '@angular/core/testing';
import { TeamDialogBoxComponent } from './team-dialog-box.component';
describe('TeamDialogBoxComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TeamDialogBoxComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TeamDialogBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=team-dialog-box.component.spec.js.map