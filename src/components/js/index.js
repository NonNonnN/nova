//处理返回数组
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = require("jquery");
var upload = /** @class */ (function () {
    function upload() {
    }
    upload.prototype.plant = function (arr, next) {
        var b = new Array();
        var obj = new Object();
        var _loop_1 = function (i) {
            (function () {
                obj.fsName = arr[i];
                obj.link = function () {
                    jquery_1.default.ajax({
                        url: 'http://127.0.0.1:8000/readfs',
                        type: 'get',
                        dataType: 'json',
                        jsonp: 'callback',
                        data: obj.fsName,
                        traditional: true,
                        success: function (data) {
                            next(data);
                        }
                    });
                };
                b.push(obj);
            })();
        };
        for (var i = 0; i < arr.length; i++) {
            _loop_1(i);
        }
        return b;
    };
    return upload;
}());
var a = [
    1, 2, 3, 4, 5
];
var c = new upload();
var b = c.plant(a);
console.log(b);
