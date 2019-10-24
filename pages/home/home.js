// miniprogram/pages/home/home.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messages:[
      {
        Title:'[战术面板]怎样打出高效流畅的进攻组合？（一）',
        imagsrc:'https://cdn.max-c.com/heybox/dailynews/img/6d9a3a59d4148b49d708ce14baea2b77.jpg?imageMogr2/format/jpg',
        Summary:'相信很多玩家在打R6排位的时候都会遇到进攻受阻，大家分工不明确，对地图和战术的配合不当所造成的一系列问题，有时候前后点的接应不到位，最后导致敌方打野的趁虚而入或者翻窗偷人，转瞬之间就会被打乱节奏。对于室内近身作战，制图画图以及识图是必不可少的一项技能。'
      },
      {
        Title:'联盟日报：LOL官方发布C组宣传片，云顶9.21版本更新',
        imagsrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571919920028&di=baabb3fa921f08f7547dd25c0ac01419&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201711%2F25%2F20171125090432_WPKQx.jpeg',
        Summary:'因为热爱，所以喜欢。各位老哥们大家好，今天的日报是由我来搞。今天大家的目光应该都会被C组的小组赛所吸引，所以内容并不是太多，还望各位老哥理解。那么不多说废话，直接开整。'
      },
      {
        Title:'账号封禁周报：PUBG官方上周永久封禁113,387个账号',
        imagsrc:'https://bbsimg.maxjia.com//heybox/bbs/imgs/2019/10/24/a28424733e1d9b95e9f788b978375d3d/thumb?imageMogr2/thumbnail/!80p/format/jpg',
        Summary:'根据PUBG官方报告，PUBG每天都在不断寻求各种手段和方法，以阻止未经授权的非法程序，并严格和坚决地回应检测。'
      },
      {
        Title:'返璞归真：《使命召唤：现代战争》剁手前瞻',
        imagsrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571919839834&di=9c0a52665661759367a810806aee73d5&imgtype=0&src=http%3A%2F%2Fimg11.18183.com%2Fku18183%2Fimage%2F2019%2F08%2F30%2Ffb0a5518313cc4d078056d89b3fbce66.jpg%40q_80',
        Summary:'《使命召唤：现代战争》（Call of Duty: Modern Warfare）是一款由Infinity Ward开发，动视发行的第一人称射击游戏，是使命召唤游戏系列第16部作品，也是使命召唤“现代战争”系列的重启之作。'
      },
      {
        Title:'对3A游戏和独立游戏的区分，有那么重要吗？',
        imagsrc:'https://cdn.max-c.com/heybox/dailynews/img/d5001e8d1ff9d7c3b62cd2582db520f7.jpg?imageMogr2/format/jpg',
        Summary:'近日，《索尼克狂热》与《凯登丝勇闯海拉鲁》等作品的艺术设计师Paul Veer在接受采访时被问到——他是怎么界定3A游戏和独立游戏的，这是否重要？'
      },

      {
        Title:'PEL选手发推：我们也想在休赛期拥有第三方赛事！',
        imagsrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571919798147&di=436d63db43dbe9770b8e5aef48228bfc&imgtype=0&src=http%3A%2F%2Ffile06.16sucai.com%2F2016%2F0330%2F09b5779d1f459cacd19ba0b8daeac2fa.jpg',
        Summary:'近日，国内三大杯赛：微博杯、虎牙天命杯和斗鱼黄金大奖赛先后官宣将在休赛期举行。这一消息无疑让漫长休赛期中的欧美职业选手异常羡慕。FaZe战队的mexy就转推表示希望西方赛区也能在休赛期组织一些第三方比赛。'
      },
      {
        Title:'缓解比赛压力，让治疗犬走进游戏赛事',
        imagsrc:'https://cdn.max-c.com/heybox/dailynews/img/d2eca0e2913d99d3be3a8ec8cd1acd8a.jpg?imageMogr2/format/jpg',
        Summary:'格斗游戏的比赛现场总是充斥着各种各样的压力。在比赛开始之前，选手们就承受着巨大的压力，这种压力会随着比赛时间的临近而逐渐累计，而当这一切结束时，不论输赢，所有的情绪都会如潮水般爆发出来。这时候，有什么能比的上去揉一揉大型犬们毛茸茸的肚子更好的减压方法呢？'
      }
    ],
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