import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function ContactFormComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Course Name is Required");
    i0.ɵɵelementEnd();
} }
function ContactFormComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    var _r1 = i0.ɵɵreference(6);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Course Name should be minimum ", _r1.errors == null ? null : _r1.errors["minlength"].requiredLength, " characters ");
} }
function ContactFormComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtemplate(1, ContactFormComponent_div_7_div_1_Template, 2, 0, "div", 17);
    i0.ɵɵtemplate(2, ContactFormComponent_div_7_div_2_Template, 2, 1, "div", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r1 = i0.ɵɵreference(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r1.errors == null ? null : _r1.errors["required"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r1.errors == null ? null : _r1.errors["minlength"]);
} }
function ContactFormComponent_option_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var c_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", c_r8.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", c_r8.name, " ");
} }
function ContactFormComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtext(1, " Category is Required ");
    i0.ɵɵelementEnd();
} }
export var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent() {
        this.categories = [
            { id: 1, name: 'Development' },
            { id: 2, name: 'Art' },
            { id: 3, name: 'Languages' },
        ];
    }
    ContactFormComponent.prototype.submit = function (f) {
        console.log(f);
    };
    ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) { return new (t || ContactFormComponent)(); };
    ContactFormComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContactFormComponent, selectors: [["contact-form"]], decls: 26, vars: 7, consts: [[3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "courseName"], ["required", "", "minlength", "5", "ngModel", "", "name", "name", "id", "name", "type", "text", 1, "form-control"], ["name", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "category"], ["required", "", "ngModel", "", "name", "category", "id", "category", 1, "form-control"], ["category", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "checkbox"], ["for", "moneyBackGuaranteee"], ["ngModel", "", "name", "hasMoneyBack", "type", "checkbox", "id", "moneyBackGuarantee"], [1, "btn", "btn-primary", 3, "disabled"], [1, "alert", "alert-danger"], [4, "ngIf"], [3, "value"]], template: function ContactFormComponent_Template(rf, ctx) { if (rf & 1) {
            var _r9 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 0, 1);
            i0.ɵɵlistener("ngSubmit", function ContactFormComponent_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r9); var _r0 = i0.ɵɵreference(1); return i0.ɵɵresetView(ctx.submit(_r0.value)); });
            i0.ɵɵelementStart(2, "div", 2)(3, "label", 3);
            i0.ɵɵtext(4, "Course Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "input", 4, 5);
            i0.ɵɵtemplate(7, ContactFormComponent_div_7_Template, 3, 2, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 2)(9, "label", 7);
            i0.ɵɵtext(10, "Category");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "select", 8, 9);
            i0.ɵɵelement(13, "option", 10);
            i0.ɵɵtemplate(14, ContactFormComponent_option_14_Template, 2, 2, "option", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div");
            i0.ɵɵtemplate(16, ContactFormComponent_div_16_Template, 2, 0, "div", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "div", 12)(18, "label", 13);
            i0.ɵɵelement(19, "input", 14);
            i0.ɵɵtext(20, " 30-day money back guarantee? ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "p");
            i0.ɵɵtext(22);
            i0.ɵɵpipe(23, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "button", 15);
            i0.ɵɵtext(25, "Create");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            var _r0 = i0.ɵɵreference(1);
            var _r1 = i0.ɵɵreference(6);
            var _r3 = i0.ɵɵreference(12);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", _r1.touched && !_r1.valid);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngForOf", ctx.categories);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", _r3.touched && !_r3.valid);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(23, 5, _r0.value));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", !_r0.valid);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.NgModel, i2.NgForm, i1.JsonPipe] });
    return ContactFormComponent;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContactFormComponent, [{
        type: Component,
        args: [{ selector: 'contact-form', template: "<form #f=\"ngForm\" (ngSubmit)=\"submit(f.value)\">\n  <div class=\"form-group\">\n    <label for=\"courseName\">Course Name</label>\n    <input\n      required\n      minlength=\"5\"\n      ngModel\n      name=\"name\"\n      #name=\"ngModel\"\n      id=\"name\"\n      type=\"text\"\n      class=\"form-control\"\n    />\n    <div class=\"alert alert-danger\" *ngIf=\"name.touched && !name.valid\">\n      <div *ngIf=\"name.errors?.['required']\">Course Name is Required</div>\n      <div *ngIf=\"name.errors?.['minlength']\">\n        Course Name should be minimum\n        {{ name.errors?.['minlength'].requiredLength }} characters\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"category\">Category</label>\n    <select\n      required\n      ngModel\n      name=\"category\"\n      #category=\"ngModel\"\n      id=\"category\"\n      class=\"form-control\"\n    >\n      <option value=\"\"></option>\n      <option *ngFor=\"let c of categories\" [value]=\"c.id\">\n        {{ c.name }}\n      </option>\n    </select>\n    <div>\n      <div\n        *ngIf=\"category.touched && !category.valid\"\n        class=\"alert alert-danger\"\n      >\n        Category is Required\n      </div>\n    </div>\n  </div>\n  <div class=\"checkbox\">\n    <label for=\"moneyBackGuaranteee\">\n      <input\n        ngModel\n        name=\"hasMoneyBack\"\n        type=\"checkbox\"\n        id=\"moneyBackGuarantee\"\n      />\n      30-day money back guarantee?\n    </label>\n  </div>\n  <p>{{ f.value | json }}</p>\n  <button class=\"btn btn-primary\" [disabled]=\"!f.valid\">Create</button>\n</form>\n" }]
    }], null, null); })();
//# sourceMappingURL=contact-form.component.js.map