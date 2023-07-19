import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export var LikeComponent = /** @class */ (function () {
    function LikeComponent() {
    }
    LikeComponent.prototype.onClick = function () {
        this.likesCount += this.isActive ? -1 : 1;
        this.isActive = !this.isActive;
    };
    LikeComponent.ɵfac = function LikeComponent_Factory(t) { return new (t || LikeComponent)(); };
    LikeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LikeComponent, selectors: [["app-like"]], inputs: { likesCount: "likesCount", isActive: "isActive" }, decls: 4, vars: 3, consts: [[1, "circle", 3, "click"]], template: function LikeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "span")(1, "div", 0);
            i0.ɵɵlistener("click", function LikeComponent_Template_div_click_1_listener() { return ctx.onClick(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(2, "span");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("highlighted", ctx.isActive);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.likesCount);
        } }, styles: [".circle[_ngcontent-%COMP%] {\n  border: 10px solid #ccc;\n  border-radius: 50%;\n\n  cursor: pointer;\n}\n\n.highlighted[_ngcontent-%COMP%] {\n  border: 10px solid deeppink;\n}"] });
    return LikeComponent;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LikeComponent, [{
        type: Component,
        args: [{ selector: 'app-like', template: "<span>\n  <div class=\"circle\" [class.highlighted]=\"isActive\" (click)=\"onClick()\"></div>\n</span>\n<span>{{ likesCount }}</span>\n", styles: [".circle {\n  border: 10px solid #ccc;\n  border-radius: 50%;\n\n  cursor: pointer;\n}\n\n.highlighted {\n  border: 10px solid deeppink;\n}\n"] }]
    }], null, { likesCount: [{
            type: Input,
            args: ['likesCount']
        }], isActive: [{
            type: Input,
            args: ['isActive']
        }] }); })();
//# sourceMappingURL=like.component.js.map