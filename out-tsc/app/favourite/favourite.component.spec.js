import { TestBed } from '@angular/core/testing';
import { FavouriteComponent } from './favourite.component';
describe('FavouriteComponent', function () {
    var component;
    var fixture;
    beforeEach(function () {
        TestBed.configureTestingModule({
            declarations: [FavouriteComponent]
        });
        fixture = TestBed.createComponent(FavouriteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=favourite.component.spec.js.map