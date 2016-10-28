//
var app = getApp();
Page({
    data: {
        imagesUrl: [],
        imgWall: [],
        isTrue: false
    },
    addImages: function () {
        var that = this;
        wx.chooseImage({
            count: 5,
            sizeType: ['original'],
            success: function (res) {
                var imgUrl = that.data.imagesUrl;
                console.log(res);
                for (var i = 0; i < res.tempFilePaths.length; i++) {
                    imgUrl.push((res.tempFilePaths)[i]);
                }
                console.log(imgUrl);
                that.setData({
                    imagesUrl: imgUrl
                });
                console.log(that.data.imagesUrl)
            },
            fail: function (res) {
                console.log(res);
            }
        })
    },
    createWall: function () {
        this.setData({
            isTrue: true,
            imgWall: this.data.imagesUrl,
            imagesUrl: []
        });
        console.log('imgWall',this.data.imgWall);
    },
    clearImages: function () {
        this.setData({
            imagesUrl: []
        })
    }
});