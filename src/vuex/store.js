import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userid
}

const mutations = {
  storageToStore(state, data) {
    let token = localStorage.getItem('token')
    // let superAdmin = localStorage.getItem('superAdmin')
    // let museumId = localStorage.getItem('museumId')
    if (token != undefined) { 
      state.token = token
    }
    // if (superAdmin != undefined) { 
    //   state.superAdmin = superAdmin
    // }
    if (museumId != undefined) { 
      state.museumId = museumId
    }
  },
  signOut(state){
    localStorage.clear();
    state.token = ''
    state.superAdmin = ''
    state.museumId = ''
  },
  routerToStore(state,data) {
    state.active = data.name
  },
  
}

export default new Vuex.Store({
  state,
  mutations,
})
