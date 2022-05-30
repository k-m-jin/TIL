<template>
  <HelloWorld/>
  <Brother/>
</template>

<script>
// import {computed} from  'vue'
import HelloWorld from '~/components/HelloWorld.vue'
import Brother from '~/components/Brother.vue'

export default {
  components: {
    HelloWorld,
    Brother
  },
  // provide(){
  //   return {
  //     count: computed(()=> this.count),
  //     increase: this.increase
  //   }
  // },
  // data(){
  //   return {
  //     count: 0
  //   }
  // },
  // methods:{
  //   increase(){
  //     this.count += 1
  //   }
  // }

}
</script>