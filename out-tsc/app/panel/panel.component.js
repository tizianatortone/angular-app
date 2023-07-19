import { Component } from '@angular/core';
import * as i0 from "@angular/core";
var _c0 = [[["", 8, "heading"]], [["", 8, "body"]]];
var _c1 = [".heading", ".body"];
export var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
    }
    PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(); };
    PanelComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PanelComponent, selectors: [["bootstrap-panel"]], ngContentSelectors: _c1, decls: 8, vars: 0, consts: [[1, "card", 2, "width", "18rem"], [1, "card-body"], [1, "card-title"], [1, "card-text"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "panel works!");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 0)(3, "div", 1)(4, "div", 2);
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 3);
            i0.ɵɵprojection(7, 1);
            i0.ɵɵelementEnd()()();
        } } });
    return PanelComponent;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelComponent, [{
        type: Component,
        args: [{ selector: 'bootstrap-panel', template: "<p>panel works!</p>\n<div class=\"card\" style=\"width: 18rem\">\n  <div class=\"card-body\">\n    <div class=\"card-title\">\n      <ng-content select=\".heading\"></ng-content>\n    </div>\n    <div class=\"card-text\">\n      <ng-content select=\".body\"></ng-content>\n    </div>\n  </div>\n</div>\n" }]
    }], null, null); })();
//# sourceMappingURL=panel.component.js.map