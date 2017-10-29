const app = getApp();
const common = require('../../libs/common.js');
const timer = require('../../libs/dateformater.js');

Page({
  data: {
    adminMode: false,
  },

  onLoad(query) {
    if ('mode' in query) {
      this.setData({
        adminMode: query.mode
      });
    }
  },

  onShow() {
    const that = this;
    common.showLoading();
    common.fetchRecommends().then(recommends => {
      Promise.resolve(
        recommends.map(recommend => {
          return Object.assign({}, {
            title: recommend.attributes.title,
            tag: recommend.attributes.tag,
            description: recommend.attributes.description,
            images: recommend.attributes.images,
            goodLink: recommend.attributes.goodLink,
            objectId: recommend.id,
            updateAt: timer(recommend.updatedAt, 'yyyy年mm月dd日'),
          });
        })).then(results => {
        that.setData({
          recommends: results
        });
        common.hideLoading();
      });
    }).catch(error => {
      common.hideLoading();
      console.error(error);
    });
  },

  goBack() {
    wx.navigateBack({
      delta: 1
    })
  },

  deleteRecommend(e) {
    const that = this;
    wx.showModal({
      title: '温馨提醒',
      content: '高阿姨，想清楚了再删哦~.~',
      success: function(res) {
        if (res.confirm) {
          common.showLoading("删除中");
          const objectId = e.currentTarget.id;
          common.deleteObject('Recommend', objectId).then(
            function () {
              let updatedRecommends = that.data.recommends;
              common.removeItemByObjectId(updatedRecommends, objectId);
              that.setData({
                recommends: updatedRecommends
              });
              common.showSuccess('删除成功');
            }, function (error) {
              console.log(error);
              common.showFail('删除失败');
            }
          );
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  modifyRecommend(e) {
    const url = `../editRecommend/editRecommend?id=${e.currentTarget.id}`;
    wx.navigateTo({
      url: url,
    });
  }
});

