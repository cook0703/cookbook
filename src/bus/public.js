// 导入vue，在依赖那里可以找
import Vue from 'vue';
//new一个vue变量
var bus = new Vue();
//导出公共的vue变量
//因为导出的是一个对象所以要加一个{}
export {bus} ;