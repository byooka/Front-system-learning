'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 默认暴露 可以暴露任意数据类型，暴露什么数据接收到的就是什么数据
// export default () => {
//   console.log('默认暴露出来的数据')
// }

exports.default = {
  msg: '默认暴露出来的数据',
  foo: function foo() {
    console.log(this.msg);
  }
};