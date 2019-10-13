// miniprogram/pages/home/home.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    age:"19",
    messages:[
      {
        name:'科比',
        messages:'我们去打篮球啊！'
      },
      {
        name:'成龙',
        messages:'你看《A计划》了吗'
      }
    ],
    none:'还是调用，不过更厉害',
    TabCur: 0,
    scrollLeft:0,
    ColorList: app.globalData.ColorList,
    HomePage:0,
  },
  
  clickview:function(event){
    console.log('hhhh')
  },
  // 这是导航栏的
  tabSelect:function(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60,
      HomePage:e.currentTarget.dataset.id
    })
  },
//房间


  "window": {
    "backgroundColor": "blue",
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#0081ff",
    "navigationBarTitleText": "友时",
    "navigationBarTextStyle": "white",
    
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
    let model = 'null'
    wx.getSystemInfo({
      success(res) {
        model = res.model;
        console.log(res.model)
      }
    })
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