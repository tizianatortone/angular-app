import { TestBed } from '@angular/core/testing';
import { ChangePasswordComponent } from './change-password.component';
describe('ChangePasswordComponent', function () {
    var component;
    var fixture;
    beforeEach(function () {
        TestBed.configureTestingModule({
            declarations: [ChangePasswordComponent]
        });
        fixture = TestBed.createComponent(ChangePasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=change-password.component.spec.js.map