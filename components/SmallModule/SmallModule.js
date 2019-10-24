// miniprogram/small-module/small-module.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ColorList: app.globalData.ColorList,
    ThePage : 0
  },

//搜索栏转换实现
ChangePage:function(ThePage){
  // const that = this;
  // if(true){
  //   that.set
  // }
  this.setData({
   ThePage: 1,
  })
  //app.data.ThePage=1;
  // 测试
  // console.log(111);      
},
ReturnBack: function(ThePage){
  this.setData({
    ThePage:0,
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})