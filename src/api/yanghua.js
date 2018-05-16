

export default function() {
  let o = window.location.origin
  let slag = 'api'
  
  let path = {
    harvest: `${o}/${api}/energy/harvest`,                  // 能量收取      post [uid, energyId, userPlantId]
    flowerpot_list: `${o}/${api}/flowerpot/list`,           // 花瓶列表      get
    plant_list: `${o}/${api}/plant/list`,                   // 植物列表      get
    update: `${o}/${api}/user/update`,                      // 创建用户      post [userId, nickname, avatar]
    update: `${o}/${api}/walkRecord/update`,                // 每日更新步数  post [uid, steps]
    adopt: `${o}/${api}/userPlant/adopt`,                   // 领养植物     post [uid, flowerpotId, plantId]
    detail: `${o}/${api}/userPlant/detail`,                 // 植物详情     get [uid]
    discard: `${o}/${api}/userPlant/discard`,               // 丢弃植物     post [uid, userPlantId]
    harvest: `${o}/${api}/userPlant/harvest`,               // 收获种子     post [uid, userPlantId]
    watering: `${o}/${api}/water/watering`,                 // 浇水        post  [uid, userPlantId]
  }
  return path
}
