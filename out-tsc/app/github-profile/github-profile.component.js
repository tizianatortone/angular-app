import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export var GithubProfileComponent = /** @class */ (function () {
    function GithubProfileComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    GithubProfileComponent.prototype.submit = function () {
        this.router.navigate(['/followers'], {
            queryParams: { page: 1, order: 'newest' },
        });
    };
    GithubProfileComponent.prototype.ngOnInit = function () {
        //simpler way to get access to route parameters with the 'snapshot'. here the paramMap is an object and not an observable like below (code commented out)
        var id = this.route.snapshot.paramMap.get('id');
        console.log(id);
        // this.route.paramMap.subscribe((params) => {
        // let id = +(params?.get('id') as string);
        //the + is to convert the string (id), which is the allowed value, into a number
        // the ? and 'as string' was added by AI as a solution bc the code on mosh video did not work for me
        // console.log(id);
        // });
    };
    GithubProfileComponent.ɵfac = function GithubProfileComponent_Factory(t) { return new (t || GithubProfileComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
    GithubProfileComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GithubProfileComponent, selectors: [["github-profile"]], decls: 2, vars: 0, template: function GithubProfileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "github-profile works!");
            i0.ɵɵelementEnd();
        } } });
    return GithubProfileComponent;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GithubProfileComponent, [{
        type: Component,
        args: [{ selector: 'github-profile', template: "<p>github-profile works!</p>\n" }]
    }], function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=github-profile.component.js.map