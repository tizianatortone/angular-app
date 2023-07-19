import { TestBed } from '@angular/core/testing';
import { ZippyComponent } from './zippy.component';
describe('ZippyComponent', function () {
    var component;
    var fixture;
    beforeEach(function () {
        TestBed.configureTestingModule({
            declarations: [ZippyComponent]
        });
        fixture = TestBed.createComponent(ZippyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=zippy.component.spec.js.map