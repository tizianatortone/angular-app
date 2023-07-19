import { __extends } from "tslib";
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export var GithubFollowersService = /** @class */ (function (_super) {
    __extends(GithubFollowersService, _super);
    function GithubFollowersService(http) {
        return _super.call(this, 'https://api.github.com/users/mosh-hamedani/followers', http) || this;
    }
    GithubFollowersService.ɵfac = function GithubFollowersService_Factory(t) { return new (t || GithubFollowersService)(i0.ɵɵinject(i1.HttpClient)); };
    GithubFollowersService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: GithubFollowersService, factory: GithubFollowersService.ɵfac, providedIn: 'root' });
    return GithubFollowersService;
}(DataService));
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GithubFollowersService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=github-followers.service.js.map