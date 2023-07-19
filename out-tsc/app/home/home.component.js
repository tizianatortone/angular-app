import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
    HomeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "home works!");
            i0.ɵɵelementEnd();
        } } });
    return HomeComponent;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeComponent, [{
        type: Component,
        args: [{ selector: 'home', template: "<p>home works!</p>\n" }]
    }], null, null); })();
//# sourceMappingURL=home.component.js.map