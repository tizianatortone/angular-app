import { TestBed } from '@angular/core/testing';
import { PanelComponent } from './panel.component';
describe('PanelComponent', function () {
    var component;
    var fixture;
    beforeEach(function () {
        TestBed.configureTestingModule({
            declarations: [PanelComponent]
        });
        fixture = TestBed.createComponent(PanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=panel.component.spec.js.map