import { __extends } from "tslib";
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export var PostService = /** @class */ (function (_super) {
    __extends(PostService, _super);
    //declared url here to avoid duplicating the url in all methods/functions below. why private? bc this is only for the implementation detail of this class. No where outside of this class we want this field to be visible.
    function PostService(http) {
        return _super.call(this, 'https://jsonplaceholder.typicode.com/posts', http) || this;
    }
    PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(i0.ɵɵinject(i1.HttpClient)); };
    PostService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' });
    return PostService;
}(DataService));
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=post.service.js.map