//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },

  onLoad: function () {
  },

  callMe:function(){
    console.log('dianj');
    wx.makePhoneCall({
      phoneNumber: '18271696804',
    })
  },

  getMap:function(){
    wx.getLocation({
      // type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success(res) {
        const latitude = 29.852080
        const longitude = 115.538640
        wx.openLocation({
          latitude,
          longitude,
          scale: 18
        })
      }
    })
  },
  
  onShareAppMessage: function () {
    return {
      title: '自定义转发标题',
      path: '/pages/index/index'
    }
  },

})
