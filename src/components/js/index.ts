//处理返回数组
'use strict';
import $ from 'jquery';
class upload {
  constructor() {
  }
  plant(arr:Array<any>,next:any):object{
    let b:Array<any> = new Array();
    let obj:object = new Object();
    for (let i = 0; i < arr.length; i++) {
      (function () {
        obj.fsName = arr[i];
        obj.link = function () {
          $.ajax({
            url:'http://127.0.0.1:8000/readfs',
            type:'get',
            dataType:'json',
            jsonp:'callback',
            data:obj.fsName,//发送请求打开文档或者访问文件夹
            traditional:true,
            success:function (data:any) {
              next(data)
            }
          })
        };
        b.push(obj);
      })()
    }
    return b;
  }
}
const a =[
  1,2,3,4,5
];
const c=new upload();
const b=c.plant(a);
console.log(b)
