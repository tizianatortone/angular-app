import { TestBed } from '@angular/core/testing';
import { PostsComponent } from './posts.component';
describe('PostsComponent', function () {
    var component;
    var fixture;
    beforeEach(function () {
        TestBed.configureTestingModule({
            declarations: [PostsComponent]
        });
        fixture = TestBed.createComponent(PostsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=posts.component.spec.js.map