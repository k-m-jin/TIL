import { createStore } from 'vuex'
import count from './count'
import message from './message'

export default createStore({
  modules: {
    //message 라는 모듈을 heropy 라는 이름으로 받는다
    // heropy: message,
    message,
    count: count,
  },
})
