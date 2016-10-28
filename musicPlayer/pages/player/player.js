//player.js

var app = getApp();
Page({
    data: {},
    onLoad: function(){
        console.log('load');
        wx.request({
            url: '',
            success: function(res){
                console.log('success');
                console.log(res)
            }
        })
    }
});