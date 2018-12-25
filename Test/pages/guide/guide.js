Page({
  data: {
    second: 2
  },
  onLoad() {
    let timer = setInterval(() => {
      let second = this.data.second
      second--
      this.setData({
        second: second
      })
      if (second == 0) {
        clearInterval(timer)
        my.switchTab({
          url: '/pages/index/index'
        })
      }
    }, 1000)
  },
});
