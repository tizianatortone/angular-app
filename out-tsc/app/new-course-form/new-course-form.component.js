import { FormControl, Validators, } from '@angular/forms';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
function NewCourseFormComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    var _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 4);
    i0.ɵɵlistener("click", function NewCourseFormComponent_li_4_Template_li_click_0_listener() { var restoredCtx = i0.ɵɵrestoreView(_r4); var topic_r2 = restoredCtx.$implicit; var ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.removeTopic(topic_r2)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var topic_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", topic_r2.value, " ");
} }
export var NewCourseFormComponent = /** @class */ (function () {
    // see the FORMBUILDER BELOW for a cleaner code but free to choose what you consider better
    // = new FormGroup({
    // name: new FormControl(' ', Validators.required),
    // contact: new FormGroup({
    //   email: new FormControl(),
    //   phone: new FormControl(),
    //  }),
    // topics: new FormArray([]),
    // });//
    function NewCourseFormComponent(fb) {
        this.form = fb.group({
            name: [' ', Validators.required],
            contact: fb.group({
                email: [],
                phone: [],
            }),
            topics: fb.array([]),
        });
    }
    NewCourseFormComponent.prototype.addTopic = function (topic) {
        this.topics.push(new FormControl(topic.value));
        topic.value = ' ';
    };
    NewCourseFormComponent.prototype.removeTopic = function (topic) {
        var index = this.topics.controls.indexOf(topic);
        this.topics.removeAt(index);
    };
    Object.defineProperty(NewCourseFormComponent.prototype, "topics", {
        get: function () {
            return this.form.get('topics');
        },
        enumerable: false,
        configurable: true
    });
    NewCourseFormComponent.ɵfac = function NewCourseFormComponent_Factory(t) { return new (t || NewCourseFormComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    NewCourseFormComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NewCourseFormComponent, selectors: [["new-course-form"]], decls: 5, vars: 1, consts: [["type", "text", 1, "form-control", 3, "keyup.enter"], ["topic", ""], [1, "list-group"], ["class", "list-group-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", 3, "click"]], template: function NewCourseFormComponent_Template(rf, ctx) { if (rf & 1) {
            var _r5 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form")(1, "input", 0, 1);
            i0.ɵɵlistener("keyup.enter", function NewCourseFormComponent_Template_input_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r5); var _r0 = i0.ɵɵreference(2); return i0.ɵɵresetView(ctx.addTopic(_r0)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "ul", 2);
            i0.ɵɵtemplate(4, NewCourseFormComponent_li_4_Template, 2, 1, "li", 3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.topics == null ? null : ctx.topics["controls"]);
        } }, dependencies: [i2.NgForOf, i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.NgForm], styles: ["form[_ngcontent-%COMP%] {\n  padding: 80px;\n}"] });
    return NewCourseFormComponent;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NewCourseFormComponent, [{
        type: Component,
        args: [{ selector: 'new-course-form', template: "<form>\n  <input\n    type=\"text\"\n    class=\"form-control\"\n    (keyup.enter)=\"addTopic(topic)\"\n    #topic\n  />\n  <ul class=\"list-group\">\n    <li\n      *ngFor=\"let topic of topics?.['controls']\"\n      (click)=\"removeTopic(topic)\"\n      class=\"list-group-item\"\n    >\n      {{ topic.value }}\n    </li>\n  </ul>\n</form>\n", styles: ["form {\n  padding: 80px;\n}\n"] }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=new-course-form.component.js.map