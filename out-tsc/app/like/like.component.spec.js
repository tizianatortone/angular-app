import { TestBed } from '@angular/core/testing';
import { LikeComponent } from './like.component';
describe('LikeComponent', function () {
    var component;
    var fixture;
    beforeEach(function () {
        TestBed.configureTestingModule({
            declarations: [LikeComponent]
        });
        fixture = TestBed.createComponent(LikeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=like.component.spec.js.map