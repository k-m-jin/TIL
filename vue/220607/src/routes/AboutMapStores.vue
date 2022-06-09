
<template>
  <h1>About!</h1>
  <RouterLink to="/about/name">
    name~
  </RouterLink>
  <RouterView />
 
  <div>{{ messageStore.message }}</div>
  <div> {{ messageStore.reversedMessage }} </div>
  <button @click="messageStore.reverseMessage">
    reverse!
  </button>
  <button @click="messageStore.message = 'heropy?!?' ">
    heropy
  </button>
</template>

<script>
// import {mapState,mapActions} from 'pinia'
import {mapStores} from 'pinia'
import {useMessageStore} from '~/store/message'

export default {
computed: {
  ...mapStores([useMessageStore])
},
// created() {
//   //여러개의 데이터를 수정할때 용이
//   this.MessageStore.$patch({
//     message: 'Good!',
//     count: 2
//   })
//   //위와 같음
//   // this.messageStore.message = 'Good!'
//   // this.messageStore.count = 2
// }
methods: {
  updateStore() {
    this.messageStore.$patch({
    message: 'Good!',
    count: 2
    })
  },
  resetStore() {
    this.messageStore.$reset()
  }
}
}
</script>
