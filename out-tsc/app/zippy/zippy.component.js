import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ZippyComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} }
var _c0 = ["*"];
export var ZippyComponent = /** @class */ (function () {
    function ZippyComponent() {
    }
    ZippyComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    ZippyComponent.ɵfac = function ZippyComponent_Factory(t) { return new (t || ZippyComponent)(); };
    ZippyComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ZippyComponent, selectors: [["zippy"]], inputs: { title: "title" }, ngContentSelectors: _c0, decls: 4, vars: 4, consts: [[1, "zippy"], [1, "zippy-heading", 3, "click"], ["class", "zippy-body", 4, "ngIf"], [1, "zippy-body"]], template: function ZippyComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵlistener("click", function ZippyComponent_Template_div_click_1_listener() { return ctx.toggle(); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, ZippyComponent_div_3_Template, 2, 0, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("expanded", ctx.isExpanded);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx.title, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isExpanded);
        } }, dependencies: [i1.NgIf], styles: [".zippy[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 2px;\n}\n.zippy-heading[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding: 20px;\n  cursor: pointer;\n}\n\n.zippy-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.expanded[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n}"] });
    return ZippyComponent;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ZippyComponent, [{
        type: Component,
        args: [{ selector: 'zippy', template: "<div class=\"zippy\">\n  <div class=\"zippy-heading\" [class.expanded]=\"isExpanded\" (click)=\"toggle()\">\n    {{ title }}\n  </div>\n  <div *ngIf=\"isExpanded\" class=\"zippy-body\">\n    <ng-content></ng-content>\n  </div>\n</div>\n", styles: [".zippy {\n  border: 1px solid #ccc;\n  border-radius: 2px;\n}\n.zippy-heading {\n  font-weight: bold;\n  padding: 20px;\n  cursor: pointer;\n}\n\n.zippy-body {\n  padding: 20px;\n}\n\n.expanded {\n  background-color: #f0f0f0;\n}\n"] }]
    }], null, { title: [{
            type: Input,
            args: ['title']
        }] }); })();
//# sourceMappingURL=zippy.component.js.map