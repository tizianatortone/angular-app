import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export var AuthorsService = /** @class */ (function () {
    function AuthorsService() {
    }
    AuthorsService.prototype.getAuthors = function () {
        return ['author1', 'author2', 'author3'];
    };
    AuthorsService.ɵfac = function AuthorsService_Factory(t) { return new (t || AuthorsService)(); };
    AuthorsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthorsService, factory: AuthorsService.ɵfac });
    return AuthorsService;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthorsService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=authors.service.js.map