<template>
  <h1>About!</h1>
  <RouterLink to="/about/name">
    name~
  </RouterLink>
  <RouterView />
  <div>{{ message }}</div>
  <div> {{ reversedMessage }} </div>
  <button @click="reverseMessage">
    reverse!
  </button>
  <!-- <button @click="messageStore.message = 'heropy?!?' ">
    heropy
  </button> -->
</template>

<script>
import {mapState,mapActions} from 'pinia'
import {useMessageStore} from '~/store/message'

export default {
  // created() {
  //   console.log(this.$route)
  // }

  computed: {
    ...mapState(useMessageStore, [
      'message',
      'reversedMessage'
    ])
  },
  methods: {
    ...mapActions(useMessageStore,[
      'reverseMessage'
    ])
  }


}
</script>
