import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
    NotFoundComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NotFoundComponent, selectors: [["not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "not-found works!");
            i0.ɵɵelementEnd();
        } } });
    return NotFoundComponent;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotFoundComponent, [{
        type: Component,
        args: [{ selector: 'not-found', template: "<p>not-found works!</p>\n" }]
    }], null, null); })();
//# sourceMappingURL=not-found.component.js.map