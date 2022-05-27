<template>
<ul>
  <TodoItem v-for="todo in todos" :key="todo.id" :title="todo.title" />
</ul>
</template>

<script>
//이름만 잇는 가져오기는 노트모듈에서
// import axios from 'axios'

import TodoItem from './TodoItem.vue'
export default {
    components: { 
      TodoItem 
    },
    computed: {
      todos() {
        return this.$store.state.todos
      }
    },
    created() { 
      this.readTodos()
    },
    methods: {
      async readTodos(){
        this.$store.dispatch('readTodos')


      // const res = await  axios({
      //     url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
      //     method: 'GET',
      //     headers: {
      //       //특수기호가 있는 속성은 따옴표를 넣는다
      //       "content-type": "application/json",
      //       apikey: "FcKdtJs202204",
      //       username: "KDT2_KimMyeongJin"
      //     }
      //   })
      //   console.log(res)
      }
    }
}
</script>