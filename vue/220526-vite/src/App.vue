<template>
  {{heropy}}
  <button @click="increase">increse</button>
</template>

<script>
 export default{
   //vuex
  //  data(){
  //    return{
  //      heropy: ''
  //    }
  //  },
  //   created(){
  //    console.log(this.$heropy())
  //  },


   // 스토에서 가져온 데이터는 컴퓨티드에서 등록해서 사용
    computed: {
      heropy(){
        return this.$store.state.count
      }
    },
    methods: {
      increase(){
        //컴포넌트에서 동작시킬거라면 commit은 사용 자제하는 것이 좋음
        // this.$store.commit('increase')
        this.$store.dispatch('increase')

      }
    }
  
 }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
