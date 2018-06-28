Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "/images/loc2.png",
      latitude: 34.180023,
      longitude: 108.855338,
      width: 50,
      height: 50
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://zhang.yxwlit.com/api.php/xsdetail',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          contact: res.data.contact,
        })
      }
    })
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
  call: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.call,
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  nav(){
    console.log("到这里去....");
    wx.openLocation({
      latitude: 34.180823,
      longitude: 108.855338,
      address:'西安市南三环丈八六路',
      name:'永鑫仓储',
      scale:'10'
    })
  }
})