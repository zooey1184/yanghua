

// 获取地址栏地址
export function getUrlData(search) {
  let obj = {}
  let dataArr = decodeURIComponent(window.location.search.slice(1)).split("&")
  dataArr.forEach((e,i) => {
  	try {
  		let arr = e.split('=')
  		obj[arr[0]] = arr[1]
  	} catch (error) {
  		console.log(e)
  	}
  })
  return search ? obj[search] : obj
}

// 时间处理函数
export function timeFormate () {
  class TimeFn {
    // 倒计时
    countDown(time=60, start=function(){}, done=function(){}, over=function(){}) {
      try {
        if(Number.isNaN(Number.parseInt(time))) {
          console.log("非数字");
          return
        }else {
          let n = Number.parseInt(time)
          let originT = n
          let s = originT-1
          let timer = setInterval(()=> {
            console.log(n);
            done()
            if(originT===n) {
              start()
            }
            if(n<1) {
              n = originT
              over()
              clearInterval(timer)
            }else {
              n--
            }
          }, 1000)
        }
      } catch (e) {
        console.log(e);
      } finally {
        return
      }
    }
    // 格式化
    formate(t=new Date(), split="-", date=0) {
      let time = new Date(t)
      let y = time.getFullYear()
      let m = (time.getMonth()+1)<10 ? `0${time.getMonth()+1}` : time.getMonth()+1
      let d = time.getDate()<10 ? `0${time.getDate()}` : time.getDate()
      let h = time.getHours()<10 ? `0${time.getHours()}` : time.getHours()
      let min = time.getMinutes()<10 ? `0${time.getMinutes()}` : time.getMinutes()
      let sec = time.getSeconds()<10 ? `0${time.getSeconds()}` : time.getSeconds()
      let formate = `${y}${split}${m}${split}${d}`
      if(date===0) {
        return formate
      }else {
        formate = `${y}${split}${m}${split}${d} ${h}:${min}:${sec}`
        return formate
      }
    }
  }
  let t = new TimeFn()
  return t
}

// 获取body的dom位置宽高元素
export function clientRect() {
  let posi = {
    w: 375,
    h: 603
  }
  if (window.innerWidth == undefined) {
    posi.w = document.documentElement.clientWidth;
    posi.h = document.documentElement.clientHeight;
  } else {
    posi.w = window.innerWidth;
    posi.h = window.innerHeight;
  }
  return posi
}


// 图片预处理
export function preload() {
  class PreloadImg {
    getImg() {
      var over = false
      var self = this
      var arr = document.getElementsByTagName('img')
      var len = arr.length
      var setArr = new Array()
      setArr.length = len
      var empty = []
      if (len > 0) {
        console.log('%c 有'+len+'图片', 'color: rgb(237, 31, 187)')
        try {
          var t = (new Date()).getTime()
          for(var i=0; i<len; i++) {
            // console.log('%c 开始加载第'+i+'张图片', 'color: #1395f4')
            self.imgLoad(arr[i], function() {
              empty.push(i)
              var earr = empty.length
              if (earr == len) {
                var t1 = (new Date()).getTime()
                var tt = t1-t
                console.log('%c '+len+'张全部加载完, 总耗时'+tt+'毫秒', 'color: #42cb26')
                over = true
                return over
              }
            })
          }
        } catch (e) {
          console.log('%c 该方法报错了', 'color: #d43f33')
          console.log(e)
          over = true
          return over
        } finally {
          over = true
          return over
        }
      } else {
        console.log('%c 没有图片', 'color: #f509cf')
        over = true
        return over
      }
    }
    imgLoad(img, callback) {
      var timer = setInterval(function() {
        if (img.complete) {
          callback(img)
          clearInterval(timer)
        }
      }, 20)
    }
  }
  return new PreloadImg()
}
