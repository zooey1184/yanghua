const kaifaEnv = ['127.0.0.1', 'localhost', '140.143.39.91']

export function originHost(str='140.143.39.91') {
  let kaifa = kaifaEnv
  let o = window.location.origin
  let protocol = window.location.protocol   // => http:  || https:
  let s = `${protocol}//${str}`
  
  let t = kaifa.some((item, index, arr)=> {
    let r = new RegExp(item)
    return o.match(r)
  })
  if(t) {
    return s
  }else {
    return o
  }
}
