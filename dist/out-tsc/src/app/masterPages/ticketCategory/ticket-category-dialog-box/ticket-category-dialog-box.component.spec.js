import { async, TestBed } from '@angular/core/testing';
import { TicketCategoryDialogBoxComponent } from './ticket-category-dialog-box.component';
describe('TicketCategoryDialogBoxComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TicketCategoryDialogBoxComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TicketCategoryDialogBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ticket-category-dialog-box.component.spec.js.map