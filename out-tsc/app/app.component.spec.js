import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
describe('AppComponent', function () {
    beforeEach(function () {
        return TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AppComponent],
        });
    });
    it('should create the app', function () {
        var fixture = TestBed.createComponent(AppComponent);
        var app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
    it("should have as title 'angular-app'", function () {
        var fixture = TestBed.createComponent(AppComponent);
        var app = fixture.componentInstance;
        expect(app.post.title).toEqual('angular-app');
    });
    it('should render title', function () {
        var _a;
        var fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        var compiled = fixture.nativeElement;
        expect((_a = compiled.querySelector('.content span')) === null || _a === void 0 ? void 0 : _a.textContent).toContain('angular-app app is running!');
    });
});
//# sourceMappingURL=app.component.spec.js.map