//player.js

var app = getApp();
Page({
    data: {},
    onLoad: function () {
        console.log('load');
        var that = this;
        wx.request({
            url: 'http://127.0.0.1:5000',
            method: 'get',
            success: function (data) {
                console.log('success');
                console.log(data);
                that.setData({
                    type: data.data.type
                })
            }
        })
    }
});