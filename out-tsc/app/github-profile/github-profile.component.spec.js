import { TestBed } from '@angular/core/testing';
import { GithubProfileComponent } from './github-profile.component';
describe('GithubProfileComponent', function () {
    var component;
    var fixture;
    beforeEach(function () {
        TestBed.configureTestingModule({
            declarations: [GithubProfileComponent]
        });
        fixture = TestBed.createComponent(GithubProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=github-profile.component.spec.js.map