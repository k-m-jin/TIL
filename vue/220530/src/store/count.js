export default {
  // 모듈화된 허ㅣ먄ㅇ[ㄴㄴ,
  namespaced: true,
  state() {
    return {
      count: 0,
      // double: 2,
      // a: 1,
      // b: 3,
      // c: 3,
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
    increase({ state, commit }) {
      commit('setState', {
        // 할당은 상태응 수정하는 것이기 때문에 액션이 불가능
        // context.state.message=msg
        count: state.count + 1,
      })
    },
  },
}
