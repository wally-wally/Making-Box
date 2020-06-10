import Vue from 'vue'
import Vuex from 'vuex'
import { router } from '@/router/index.js'
import FirebaseService from '@/api/index.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    username: '',
    email: '',
    token: '',
    boxName: '',
    boxType: ''
  },
  mutations: {
    saveUserInfo(state, userInfo) {
      state.username = userInfo[0]
      state.email = userInfo[1]
      state.token = userInfo[2]
      router.push('/inputname')
    },
    saveBoxName(state, boxName) {
      state.boxName = boxName
    },
    saveBoxType(state, boxType) {
      state.boxType = boxType
    }
  },
  actions: {
    async googleLogin(context) {
      try {
        let result = await FirebaseService.loginWithGoogle()
        let userInfo = []
        userInfo.push(result.user.displayName)
        userInfo.push(result.user.email)
        userInfo.push(result.user.uid)
        context.commit('saveUserInfo', userInfo)  
      } catch {
        alert('로그인 과정에서 오류가 발생했으니 다시 로그인해주세요.')
      }
    }
  }
})