// pages/home/home.js
const app = getApp(); //获取应用实例

//获得util.js的函数,先模块化引用utils里面的js地址,reqiure('js地址')成一个面向对象
var util = require('../../utils/util.js');

Page({
  data:{
      Time1:'',
      Time2:''
  },

  getTime1:function(e){
      var that = this;
      var currentTime = util.formatTime1(new Date());
  },

  getTime2:function(e){
    var that = this;
    var currentTime = util.formatTime2(new Date());
  },

  onLoad:function(options){
    var that = this;
    setInterval(function(){
        that.setData({
            Time1: util.formatTime1(new Date()),
            Time2: util.formatTime2(new Date())
        });    
    },1000);    
  }

})