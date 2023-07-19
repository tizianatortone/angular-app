var PasswordValidators = /** @class */ (function () {
    function PasswordValidators() {
    }
    PasswordValidators.validOldPassword = function (control) {
        return new Promise(function (resolve) {
            //I am not using reject in this case so only add resolve
            if (control.value !== '1234')
                resolve({
                    invalidOldPassword: true,
                });
            else
                resolve(null);
        });
    };
    PasswordValidators.passwordShouldMatch = function (control) {
        var newPassword = control.get('newPassword');
        var confirmPassword = control.get('confirmPassword');
        if ((newPassword === null || newPassword === void 0 ? void 0 : newPassword.value) !== (confirmPassword === null || confirmPassword === void 0 ? void 0 : confirmPassword.value))
            return { passwordShouldMatch: true };
        return null;
    };
    return PasswordValidators;
}());
export { PasswordValidators };
//# sourceMappingURL=password.validators.js.map