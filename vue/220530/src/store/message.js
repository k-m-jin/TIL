export default {
  // 모듈화된 허ㅣ먄ㅇ[ㄴㄴ,
  // namespaced: true,
  state() {
    return {
      message: '',
    }
  },
  getters: {},
  mutations: {
    setState(state, payload) {
      for (const key in payload) {
        state[key] = payload[key]
      }
    },
  },
  actions: {
    updateMessage({ commit }, msg) {
      commit('setState', {
        message: msg,
      })
    },
  },
}
