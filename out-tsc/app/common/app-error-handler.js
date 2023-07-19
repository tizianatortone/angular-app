var AppErrorHandler = /** @class */ (function () {
    function AppErrorHandler() {
    }
    AppErrorHandler.prototype.handleError = function (error) {
        alert('An unexpected error has occurred');
        console.log(error);
    };
    return AppErrorHandler;
}());
export { AppErrorHandler };
//# sourceMappingURL=app-error-handler.js.map