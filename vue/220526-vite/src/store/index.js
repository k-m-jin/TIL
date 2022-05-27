import {createStore} from 'vuex'
import axios from 'axios'

const END_POINT = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos'
const headers = {
  //특수기호가 있는 속성은 따옴표를 넣는다
  "content-type": "application/json",
  apikey: "FcKdtJs202204",
  username: "KDT2_KimMyeongJin"
}


export default createStore ({
//   // data
//   state() {
//     return {
//       count: 0
//     }
//   },
// // 계산된 data === computed
//   getters:{
//     double(state){
//       return state.count * 2
//     }
//   },
//   // 수정권한 메소드
//   //수정권한이 있는 mutations을 직접 내보내서 쓰는 경우는 피하는게 좋음
//   //수정 권한이 거의 전부
//   //state에만 접근함
//   mutations: {
//     increase(state){
//       state.count += 1
//     }
//   },
//   // 외부에서 쓸땐 액션을껄, mutstions 는 가급적 내부에서
//   // state, getters, mutations, actions 에 모두 접근
//   //context
//   actions: {
//     // increase(context){
//     increase({commit}){
//       //mutations 을 호출하는 comiit, actions 를 호출하는 dispatch
//       // 사용권한의 복잡함을 해결학 ㅣㅜ이해서
//       // const (state, getters, commit , dispatch) = context
//       // const {commit }= context
//       commit('increase')
//     }
//   }







state(){
  return{
    todos: []
  }
},
mutations: {
  setTodos(state,payload){
    state.todos = payload
  }
},
actions: {
  async readTodos({commit}){
    const res = await axios({
      url: END_POINT,
      method: 'GET',
      headers: {
        //특수기호가 있는 속성은 따옴표를 넣는다
        "content-type": "application/json",
        apikey: "FcKdtJs202204",
        username: "KDT2_KimMyeongJin"
      }
    })
    console.log(res)
    commit('setTodos',res.data)
  },
  async createTodo(context, title){
    const res = await axios({
      url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
      method: 'POST',
      headers: {
        //특수기호가 있는 속성은 따옴표를 넣는다
        "content-type": "application/json",
        apikey: "FcKdtJs202204",
        username: "KDT2_KimMyeongJin"
      },
      data: {
        title
      }
    })
    // console.log(res)
  }
}
})