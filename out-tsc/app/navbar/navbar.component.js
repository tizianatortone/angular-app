import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
var _c0 = function () { return { page: 1, order: "newest" }; };
export var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
    NavbarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["navbar"]], decls: 20, vars: 2, consts: [[1, "navbar", "navbar-default"], [1, "container-fluid"], [1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav"], [1, "active"], ["href", "#"], [1, "navbar", "navbar-expand-lg", "bg-body-tertiary"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["routerLinkActive", "active current", "aria-current", "page", "routerLink", "/followers", 1, "nav-link", 3, "queryParams"], ["routerLinkActive", "active current", "routerLink", "/posts", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "ul", 3)(4, "li", 4)(5, "a", 5);
            i0.ɵɵtext(6, "Followers");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "li")(8, "a", 5);
            i0.ɵɵtext(9, "Posts");
            i0.ɵɵelementEnd()()()()()();
            i0.ɵɵelementStart(10, "nav", 6)(11, "div", 1)(12, "div", 7)(13, "ul", 8)(14, "li", 9)(15, "a", 10);
            i0.ɵɵtext(16, "Followers");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "li", 9)(18, "a", 11);
            i0.ɵɵtext(19, "Posts");
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(1, _c0));
        } }, dependencies: [i1.RouterLink, i1.RouterLinkActive] });
    return NavbarComponent;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavbarComponent, [{
        type: Component,
        args: [{ selector: 'navbar', template: "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a href=\"#\">Followers</a></li>\n        <li><a href=\"#\">Posts</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<nav class=\"navbar navbar-expand-lg bg-body-tertiary\">\n  <div class=\"container-fluid\">\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a\n            routerLinkActive=\"active current\"\n            class=\"nav-link\"\n            aria-current=\"page\"\n            routerLink=\"/followers\"\n            [queryParams]=\"{ page: 1, order: 'newest' }\"\n            >Followers</a\n          >\n        </li>\n        <li class=\"nav-item\">\n          <a\n            routerLinkActive=\"active current\"\n            class=\"nav-link\"\n            routerLink=\"/posts\"\n            >Posts</a\n          >\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n" }]
    }], null, null); })();
//# sourceMappingURL=navbar.component.js.map