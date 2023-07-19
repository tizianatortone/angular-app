import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./services/authors.service";
import * as i2 from "./summary.pipe";
export var AuthorsComponent = /** @class */ (function () {
    function AuthorsComponent(service) {
        this.text = 'In summary, the Bash terminal is a general-purpose command-line environment, while the Node.js terminal is specifically tailored for executing JavaScript code using Node.js. The choice of terminal depends on your requirements and the tasks you want to perform in your VS Code session.';
        this.authors = service.getAuthors();
    }
    AuthorsComponent.ɵfac = function AuthorsComponent_Factory(t) { return new (t || AuthorsComponent)(i0.ɵɵdirectiveInject(i1.AuthorsService)); };
    AuthorsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AuthorsComponent, selectors: [["authors"]], decls: 4, vars: 4, consts: [[1, "btn", "btn-primary"]], template: function AuthorsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, "Click me!");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "summary");
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(3, 1, ctx.text, 10), "");
        } }, dependencies: [i2.SummaryPipe], encapsulation: 2 });
    return AuthorsComponent;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthorsComponent, [{
        type: Component,
        args: [{
                selector: 'authors',
                template: "<button class=\"btn btn-primary\">Click me!</button>\n    {{ text | summary : 10 }}",
            }]
    }], function () { return [{ type: i1.AuthorsService }]; }, null); })();
//# sourceMappingURL=authors.component.js.map