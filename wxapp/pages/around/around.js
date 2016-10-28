//around js
var app = getApp();

Page({
    data: {},
    searchAround: function () {
        wx.getLocation({
            success: function(res){
                console.log(res)
                wx.openLocation({
                    latitude: res.latitude,
                    longitude: res.longitude,
                    success: function(res){
                        console.log(res);
                    }
                })
            }
        });

    }
});