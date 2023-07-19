import { TestBed } from '@angular/core/testing';
import { NewCourseFormComponent } from './new-course-form.component';
describe('NewCourseFormComponent', function () {
    var component;
    var fixture;
    beforeEach(function () {
        TestBed.configureTestingModule({
            declarations: [NewCourseFormComponent]
        });
        fixture = TestBed.createComponent(NewCourseFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=new-course-form.component.spec.js.map