//处理返回数组
'use strict';
import $ from 'jquery'
class upload {
  constructor(arr) {
  }
  plant(arr) {
    let array = new Array();
    for (let i = 0; i <= arr.length-1; i++) {
      let obj = new Object();
      obj.fsname = arr[i];
      obj.link = function () {
        $.ajax({
          url: 'http://127.0.0.1:8000/readfs',
          type: 'get',
          dataType: 'json',
          jsonp: 'callback',
          data: obj.fsname,
          traditional: true,
          success: function (data) {

          }
        });
      };
      array.push(obj);
    }
    return array
  }
}
export default upload
