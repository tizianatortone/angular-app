var UsernameValidators = /** @class */ (function () {
    function UsernameValidators() {
    }
    UsernameValidators.cannotContainSpace = function (control) {
        if (control.value.indexOf(' ') >= 0)
            return {
                cannotContainSpace: true,
            };
        return null;
    };
    UsernameValidators.shouldBeUnique = function (control) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value === 'mosh')
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 2000);
        });
    };
    return UsernameValidators;
}());
export { UsernameValidators };
//# sourceMappingURL=username.validators.js.map