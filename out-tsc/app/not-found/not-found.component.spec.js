import { TestBed } from '@angular/core/testing';
import { NotFoundComponent } from './not-found.component';
describe('NotFoundComponent', function () {
    var component;
    var fixture;
    beforeEach(function () {
        TestBed.configureTestingModule({
            declarations: [NotFoundComponent]
        });
        fixture = TestBed.createComponent(NotFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=not-found.component.spec.js.map