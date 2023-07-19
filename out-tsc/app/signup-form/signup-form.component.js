import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function SignupFormComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "chequing for uniqueness");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Username is required");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Username should be minimum ", ctx_r3.username == null ? null : ctx_r3.username.errors == null ? null : ctx_r3.username.errors["minlength"].requiredLength, " characters long. ");
} }
function SignupFormComponent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Username cannot contain spaces ");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Username is already taken. ");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, SignupFormComponent_div_7_div_1_Template, 2, 0, "div", 5);
    i0.ɵɵtemplate(2, SignupFormComponent_div_7_div_2_Template, 2, 1, "div", 5);
    i0.ɵɵtemplate(3, SignupFormComponent_div_7_div_3_Template, 2, 0, "div", 5);
    i0.ɵɵtemplate(4, SignupFormComponent_div_7_div_4_Template, 2, 0, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.username == null ? null : ctx_r1.username.errors == null ? null : ctx_r1.username.errors["required"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.username == null ? null : ctx_r1.username.errors == null ? null : ctx_r1.username.errors["minlength"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.username == null ? null : ctx_r1.username.errors == null ? null : ctx_r1.username.errors["cannotContainSpace"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.username == null ? null : ctx_r1.username.errors == null ? null : ctx_r1.username.errors["shouldBeUnique"]);
} }
export var SignupFormComponent = /** @class */ (function () {
    function SignupFormComponent() {
        this.form = new FormGroup({
            account: new FormGroup({
                username: new FormControl('', [
                    Validators.required,
                    Validators.minLength(3),
                    UsernameValidators.cannotContainSpace,
                    UsernameValidators.shouldBeUnique,
                ]),
                password: new FormControl('', Validators.required),
            }),
        });
    }
    Object.defineProperty(SignupFormComponent.prototype, "username", {
        get: function () {
            return this.form.get('account.username');
        },
        enumerable: false,
        configurable: true
    });
    SignupFormComponent.ɵfac = function SignupFormComponent_Factory(t) { return new (t || SignupFormComponent)(); };
    SignupFormComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SignupFormComponent, selectors: [["signup-form"]], decls: 14, vars: 3, consts: [[3, "formGroup"], ["formGroupName", "account"], [1, "form-group"], ["for", "username"], ["formControlName", "username", "id", "username", "type", "text", 1, "form-control"], [4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "password"], ["formControlName", "password", "id", "password", "type", "text", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "alert", "alert-danger"]], template: function SignupFormComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
            i0.ɵɵtext(4, "Username");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "input", 4);
            i0.ɵɵtemplate(6, SignupFormComponent_div_6_Template, 2, 0, "div", 5);
            i0.ɵɵtemplate(7, SignupFormComponent_div_7_Template, 5, 4, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 2)(9, "label", 7);
            i0.ɵɵtext(10, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(11, "input", 8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "button", 9);
            i0.ɵɵtext(13, "Sign Up");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.username == null ? null : ctx.username["pending"]);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", (ctx.username == null ? null : ctx.username["touched"]) && !(ctx.username == null ? null : ctx.username["valid"]));
        } }, dependencies: [i1.NgIf, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i2.FormGroupName], styles: ["form[_ngcontent-%COMP%] {\n  padding: 50px;\n}"] });
    return SignupFormComponent;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SignupFormComponent, [{
        type: Component,
        args: [{ selector: 'signup-form', template: "<form [formGroup]=\"form\">\n  <div formGroupName=\"account\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input\n        formControlName=\"username\"\n        id=\"username\"\n        type=\"text\"\n        class=\"form-control\"\n      />\n      <div *ngIf=\"username?.['pending']\">chequing for uniqueness</div>\n      <div\n        *ngIf=\"username?.['touched'] && !username?.['valid']\"\n        class=\"alert alert-danger\"\n      >\n        <div *ngIf=\"username?.errors?.['required']\">Username is required</div>\n        <div *ngIf=\"username?.errors?.['minlength']\">\n          Username should be minimum\n          {{username?.errors?.['minlength'].requiredLength}} characters long.\n        </div>\n        <div *ngIf=\"username?.errors?.['cannotContainSpace']\">\n          Username cannot contain spaces\n        </div>\n        <div *ngIf=\"username?.errors?.['shouldBeUnique']\">\n          Username is already taken.\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input\n        formControlName=\"password\"\n        id=\"password\"\n        type=\"text\"\n        class=\"form-control\"\n      />\n    </div>\n  </div>\n  <button class=\"btn btn-primary\" type=\"submit\">Sign Up</button>\n</form>\n", styles: ["form {\n  padding: 50px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=signup-form.component.js.map