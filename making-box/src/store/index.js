import Vue from 'vue'
import Vuex from 'vuex'
import { router } from '@/router/index.js'
import FirebaseService from '@/api/index.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    username: sessionStorage.getItem('username'),
    email: sessionStorage.getItem('email'),
    token: sessionStorage.getItem('token'),
    boxName: sessionStorage.getItem('boxName'),
    boxType: sessionStorage.getItem('boxType'),
    tool: sessionStorage.getItem('tool'),
    decorateSize: sessionStorage.getItem('decorateSize'),
    decorateCount: sessionStorage.getItem('decorateCount'),
    imgIdx: sessionStorage.getItem('imgIdx')
  },
  mutations: {
    saveUserInfo(state, userInfo) {
      state.username = userInfo[0]
      state.email = userInfo[1]
      state.token = userInfo[2]
      sessionStorage.setItem('username', userInfo[0])
      sessionStorage.setItem('email', userInfo[1])
      sessionStorage.setItem('token', userInfo[2])
      router.push('/inputname')
    },
    saveBoxName(state, boxName) {
      state.boxName = boxName
      sessionStorage.setItem('boxName', boxName)
    },
    saveBoxType(state, boxType) {
      state.boxType = boxType
      sessionStorage.setItem('boxType', boxType)
    },
    saveTool(state, tool) {
      state.tool = tool
      sessionStorage.setItem('tool', tool)
    },
    saveDecorateSize(state, size) {
      state.decorateSize = size
      sessionStorage.setItem('decorateSize', size)
    },
    saveDecorateCount(state, count) {
      state.decorateCount = count
      sessionStorage.setItem('decorateCount', count)
    },
    saveImgIdx(state, idx) {
      state.imgIdx = idx
      sessionStorage.setItem('imgIdx', idx)
    },
    resetData() {
      sessionStorage.removeItem('boxName')
      sessionStorage.removeItem('boxType')
      sessionStorage.removeItem('tool')
      sessionStorage.removeItem('decorateSize')
      sessionStorage.removeItem('decorateCount')
      sessionStorage.removeItem('imgIdx')
      router.push('/')
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