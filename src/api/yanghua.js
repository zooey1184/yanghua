// 1.s1=拼接成字符串（和原来一样） a=xx&b=xx&ada768787%^&
// 2.s2=s1转成大写（新增）
// 3.s3=s2使用URLEncode进行编码，转成utf8格式（新增）
// 4.sign=md5(s3) （和原来一样）
import md from '@/common/js/md5'
import {originHost} from '@/common/js/env'

export function sign(data={}) {
  let signkey = '1CsAFgI2vUfcn7ZVwfYYpXmmnW7JAgdY'
  let a = []
  for(let i in data) {
    a.push(i)
  }
  let b = a.sort()

  let c = new Map()
  let s = ''
  for(let i of b) {
    c.set(i, data[i])
    s += `${i}=${data[i]}&`
  }
  let l = s.length
  let g = s.substr(0, l-1)
  let d = `${s}${signkey}`
  let e = d.toUpperCase()
  let f = encodeURI(e)
  let sign = md.hex_md5(f)
  let finial = `${g}&sign=${sign}`
  return finial
}

export function path(data={}) {
  // let o = originHost()
  let o = window.location.origin
  let api = 'plant/api'
  let params = sign(data)
  let paths = {
    harvest: `${o}/${api}/energy/harvest?${params}`,                  // 能量收取      post [uid, energyId, userPlantId]
    flowerpot_list: `${o}/${api}/flowerpot/list?${params}`,           // 花瓶列表      get
    plant_list: `${o}/${api}/plant/list?${params}`,                   // 植物列表      get
    update: `${o}/${api}/user/update?${params}`,                      // 创建用户      post [userId, nickname, avatar]
    // walk_update: `${o}/${api}/walkRecord/update?${params}`,           // 每日更新步数  post [uid, steps]
    adopt: `${o}/${api}/userPlant/adopt?${params}`,                   // 领养植物     post [uid, flowerpotId, plantId]
    detail: `${o}/${api}/userPlant/detail?${params}`,                 // 植物详情     get [uid]
    discard: `${o}/${api}/userPlant/discard?${params}`,               // 丢弃植物     post [uid, userPlantId]
    harvest_seed: `${o}/${api}/userPlant/harvest?${params}`,          // 收获种子     post [uid, userPlantId]
    watering: `${o}/${api}/water/watering?${params}`,                 // 浇水        post  [uid, userPlantId]
    showDialog: `${o}/${api}/weekRank/showAddressDialog?${params}`,
    album_list: `${o}/${api}/album/list?${params}`,
    album_picture: `${o}/${api}/album/picture?${params}`,
    currentWeekRank:  `${o}/${api}/weekRank/currentWeekRank?${params}`,// 当前排名  get
    lastWeekRank:  `${o}/${api}/weekRank/lastWeekRank?${params}`,
    seed: `${o}/${api}/seed/count?${params}`,
    address_add: `${o}/${api}/address/add?${params}`,
  }
  return paths
}
