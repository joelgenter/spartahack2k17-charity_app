"use strict";
var Params = (function () {
    function Params(_data) {
        if (_data === void 0) { _data = {}; }
        this._data = _data;
    }
    Params.prototype.at = function (key) {
        return this._data[key];
    };
    Object.defineProperty(Params.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    return Params;
}());
exports.Params = Params;
//# sourceMappingURL=params.js.map