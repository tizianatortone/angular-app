import { TestBed } from '@angular/core/testing';
import { ContactFormComponent } from './contact-form.component';
describe('ContactFormComponent', function () {
    var component;
    var fixture;
    beforeEach(function () {
        TestBed.configureTestingModule({
            declarations: [ContactFormComponent]
        });
        fixture = TestBed.createComponent(ContactFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=contact-form.component.spec.js.map