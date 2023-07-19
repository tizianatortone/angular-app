import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
export var InputFormatDirective = /** @class */ (function () {
    function InputFormatDirective(el) {
        this.el = el;
    }
    InputFormatDirective.prototype.onBlur = function () {
        var value = this.el.nativeElement.value;
        if (this.format == 'lowercase')
            this.el.nativeElement.value = value.toLowerCase();
        else
            this.el.nativeElement.value = value.toUpperCase();
    };
    InputFormatDirective.ɵfac = function InputFormatDirective_Factory(t) { return new (t || InputFormatDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    InputFormatDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: InputFormatDirective, selectors: [["", "appInputFormat", ""]], hostBindings: function InputFormatDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("blur", function InputFormatDirective_blur_HostBindingHandler() { return ctx.onBlur(); });
        } }, inputs: { format: ["appInputFormat", "format"] } });
    return InputFormatDirective;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputFormatDirective, [{
        type: Directive,
        args: [{
                selector: '[appInputFormat]',
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { format: [{
            type: Input,
            args: ['appInputFormat']
        }], onBlur: [{
            type: HostListener,
            args: ['blur']
        }] }); })();
//# sourceMappingURL=input-format.directive.js.map