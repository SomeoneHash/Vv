// 引入Vue
import Vue from "vue";

// 有引入Vuex
import Vuex from 'vuex'

// 应用Vuex
Vue.use(Vuex)

// 准备 actions - 用于响应组件当中的数据
const actions = {
  // jia(context,value){
  //   // console.log('actions中的jia被调用了',context，value);
  //   context.commit('JIA',value)
  // },
  // jian(context,value){
  //   context.commit('JIAN',value)
  // },
  jiaOdd(state,value){
    if(context.sum % 2){
      context.commit('JIA',value)
    }
  },
  jiaWAait(state,value){
    setTimeout(() => {
      context.commit('JIA',value)
    }, 1000);
  }
}



// 准备 mutations - 用于操作数据
const mutations = {
  JIA(state,value){
    // console.log('mutations中的JIA被调用了',state,value);
    state.sum += value
  },
  JAIN(state,value){
    state.sum -= value
  },
}

// 准备 state - 用于存储数据
const state = {
  sum: 0 // 当前的值
}


// 创建并暴露store
export default new Vuex.store({
  actions,
  mutations,
  state,
})