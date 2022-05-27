<template>
  <input :value="title" @input="title = $event.target.value"/>
  <button @click="createTodo" >
  CREATE
</button>
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      title: ''
    }
  },
  methods: { 
    async createTodo(){
      if(!this.title.trim()) return


      this.$store.dispatch('createTodo', this.title)
      
      // const res = await axios({
      //     url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
      //     method: 'POST',
      //     headers: {
      //       //특수기호가 있는 속성은 따옴표를 넣는다
      //       "content-type": "application/json",
      //       apikey: "FcKdtJs202204",
      //       username: "KDT2_KimMyeongJin"
      //     },
      //     data: {
      //       title: this.title
      //     }
      //   })
      //   console.log(res)
    }
  }
}
</script>