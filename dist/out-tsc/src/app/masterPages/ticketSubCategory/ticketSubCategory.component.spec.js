import { async, TestBed } from '@angular/core/testing';
import { TicketSubCategoryComponent } from './ticketSubCategory.component';
describe('TicketSubCategoryComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TicketSubCategoryComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TicketSubCategoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ticketSubCategory.component.spec.js.map