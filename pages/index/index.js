//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  //事件处理函数
  onLoad: function () {
    var that=this;
    wx.showLoading({
      title: '加载中'
    })
    wx.request({
      url: 'https://zhang.yxwlit.com/api.php/xsindex',
      success:function(res){
        console.log(res.data.pics);
        var tar=res.data.pics;
        // console.log(tar[1]);
        that.setData({
          outdoor:tar[1],
          inside:tar[2],
          office:tar[3]
        });
        wx.hideLoading();
      }
    })
    // setTimeout(function(){
    //   wx.hideLoading();
    // },1500);
  },
  bigImg:function(e){
    console.log(e);
    wx.previewImage({
      urls:[e.currentTarget.dataset.src]
    })
  }
})
