import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable, InjectionToken, Inject } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export var API_URL = new InjectionToken('apiUrl');
export var DataService = /** @class */ (function () {
    function DataService(apiUrl, http) {
        this.apiUrl = apiUrl;
        this.http = http;
    }
    DataService.prototype.getAll = function () {
        return this.http.get(this.apiUrl).pipe(map(function (response) { return response; }), catchError(this.handleError));
    };
    DataService.prototype.create = function (resource) {
        return this.http.post(this.apiUrl, JSON.stringify(resource)).pipe(map(function (response) { return response; }), catchError(this.handleError));
    };
    DataService.prototype.update = function (resource) {
        return this.http.put(this.apiUrl, JSON.stringify(resource)).pipe(map(function (response) { return response; }), catchError(this.handleError));
    };
    DataService.prototype.delete = function (id //here all we need is the id of a post
    ) {
        // also we need to reference a specific post here & no JSON bc by convention delete request don't have a body
        return this.http.delete(this.apiUrl + '/' + id).pipe(map(function (response) { return response; }), catchError(this.handleError));
    };
    DataService.prototype.handleError = function (error) {
        if (error.status === 400)
            return throwError(new BadInput(error.json()));
        if (error.status === 404)
            return throwError(new NotFoundError());
        return throwError(new AppError(error));
    };
    DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(i0.ɵɵinject(API_URL), i0.ɵɵinject(i1.HttpClient)); };
    DataService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
    return DataService;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [API_URL]
            }] }, { type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data.service.js.map