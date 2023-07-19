import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./../services/github-followers.service";
import * as i3 from "@angular/common";
var _c0 = function (a1, a2) { return ["/followers", a1, a2]; };
function GithubFollowersComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
    i0.ɵɵelement(2, "img", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 4)(4, "h4")(5, "a", 5);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "a");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    var follower_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("src", follower_r1.avatar_url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction2(4, _c0, follower_r1.id, follower_r1.login));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(follower_r1.login);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(follower_r1.html_url);
} }
export var GithubFollowersComponent = /** @class */ (function () {
    function GithubFollowersComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    GithubFollowersComponent.prototype.ngOnInit = function () {
        var _this = this;
        //subscribing to multiple observables (paramMap & queryparamMap). We don't user the word observable here casue there has been an update
        combineLatest([this.route.paramMap, this.route.queryParamMap])
            .pipe(switchMap(function (combined) {
            var id = combined[0].get('id');
            var page = combined[1].get('page');
            return _this.service.getAll();
        }))
            //no longer need this subscribe
            // .subscribe((followers) => (this.followers = followers));
            .subscribe(function (followers) { return (_this.followers = followers); });
        //NO LONGER NEEDED since we subscribed to them above
        //this.route.paramMap.subscribe((params) => {});
        //this.route.queryParamMap.subscribe((params) => {});
        // let page = this.route.snapshot.queryParamMap.get('page');
    };
    GithubFollowersComponent.ɵfac = function GithubFollowersComponent_Factory(t) { return new (t || GithubFollowersComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.GithubFollowersService)); };
    GithubFollowersComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GithubFollowersComponent, selectors: [["github-followers"]], decls: 1, vars: 1, consts: [["class", "d-flex align-items-center", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center"], [1, "flex-shrink-0"], ["alt", "...", 1, "avatar", 3, "src"], [1, "flex-grow-1", "ms-3"], [3, "routerLink"]], template: function GithubFollowersComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, GithubFollowersComponent_div_0_Template, 9, 7, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.followers);
        } }, dependencies: [i3.NgForOf, i1.RouterLink], styles: [".avatar[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 100%;\n}"] });
    return GithubFollowersComponent;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GithubFollowersComponent, [{
        type: Component,
        args: [{ selector: 'github-followers', template: "<div *ngFor=\"let follower of followers\" class=\"d-flex align-items-center\">\n  <div class=\"flex-shrink-0\">\n    <img class=\"avatar\" src=\"{{ follower.avatar_url }}\" alt=\"...\" />\n  </div>\n  <div class=\"flex-grow-1 ms-3\">\n    <h4>\n      <a [routerLink]=\"['/followers', follower.id, follower.login]\">{{\n        follower.login\n      }}</a>\n    </h4>\n    <a>{{ follower.html_url }}</a>\n  </div>\n</div>\n", styles: [".avatar {\n  width: 80px;\n  height: 80px;\n  border-radius: 100%;\n}\n"] }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.GithubFollowersService }]; }, null); })();
//# sourceMappingURL=github-followers.component.js.map