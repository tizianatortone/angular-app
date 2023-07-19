import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var _c0 = function (a0, a1) { return { "btn-primary": a0, "btn-danger": a1 }; };
export var FavouriteComponent = /** @class */ (function () {
    function FavouriteComponent() {
        this.change = new EventEmitter();
    }
    FavouriteComponent.prototype.onClick = function () {
        this.isFavourite = !this.isFavourite;
        this.change.emit({ newValue: this.isFavourite });
    };
    FavouriteComponent.ɵfac = function FavouriteComponent_Factory(t) { return new (t || FavouriteComponent)(); };
    FavouriteComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FavouriteComponent, selectors: [["app-favourite"]], inputs: { isFavourite: "isFavourite" }, outputs: { change: "change" }, decls: 2, vars: 4, consts: [[1, "btn", 3, "ngClass", "click"]], template: function FavouriteComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function FavouriteComponent_Template_button_click_0_listener() { return ctx.onClick(); });
            i0.ɵɵtext(1, " BLA\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c0, ctx.isFavourite, !ctx.isFavourite));
        } }, dependencies: [i1.NgClass] });
    return FavouriteComponent;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FavouriteComponent, [{
        type: Component,
        args: [{ selector: 'app-favourite', template: "<button\n  class=\"btn\"\n  [ngClass]=\"{ 'btn-primary': isFavourite, 'btn-danger': !isFavourite }\"\n  (click)=\"onClick()\"\n>\n  BLA\n</button>\n" }]
    }], null, { isFavourite: [{
            type: Input
        }], change: [{
            type: Output
        }] }); })();
//# sourceMappingURL=favourite.component.js.map