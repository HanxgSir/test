//player.js

var app = getApp();
Page({
    data: {
        songs:""
    },
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
                    area: data.data.area,
                    type: data.data.type
                })
            }
        })
    },
    area_click: function (event) {
        console.log(event);
        var that = this;
        wx.request({
            url: 'http://127.0.0.1:5000/area/' + event.target.id,
            method: 'get',
            success: function (data) {
                console.log(data);
                that.setData({
                    songs: {
                        text:data.data.songs.text,
                        src: data.data.songs.src
                    }
                })
            }
        })
    },
    play_songs: function () {
        console.log(this.data.songs.src);
        var that = this;
        wx.getBackgroundAudioPlayerState({
            success: function (res) {
                var status = res.status;
                var dataUrl = res.dataUrl;
                var currentPosition = res.currentPosition;
                var duration = res.duration;
                var downloadPercent = res.downloadPercent;
            }
        });
        wx.playBackgroundAudio({
            dataUrl: that.data.songs.src,
            success: function(res){
                console.log(res);
            }
        })
    }
});