import { defineStore } from 'pinia'

export const useMessageStore = defineStore('message', {
  //vuex 에서는 namespaced 가 필수
  state: () => ({
    message: 'hello World',
    count: 1,
  }),
  getters: {
    reversedMessage(state) {
      return state.message.split('').reverse().join('')
    },
  },
  actions: {
    reverseMessage() {
      this.helloWorld()
      this.message = this.message.split('').reverse().join('')
    },
    helloWorld() {
      console.log('Hello world')
    },
  },
})
