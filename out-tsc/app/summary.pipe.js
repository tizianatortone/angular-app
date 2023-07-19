import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export var SummaryPipe = /** @class */ (function () {
    function SummaryPipe() {
    }
    SummaryPipe.prototype.transform = function (value, limit) {
        if (!value)
            return null;
        var actualLimit = limit ? limit : 50;
        return value.substr(0, actualLimit) + '...';
    };
    SummaryPipe.ɵfac = function SummaryPipe_Factory(t) { return new (t || SummaryPipe)(); };
    SummaryPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "summary", type: SummaryPipe, pure: true });
    return SummaryPipe;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SummaryPipe, [{
        type: Pipe,
        args: [{
                name: 'summary',
            }]
    }], null, null); })();
//# sourceMappingURL=summary.pipe.js.map