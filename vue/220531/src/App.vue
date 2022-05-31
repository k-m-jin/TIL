
<!-- <template>
  <HelloWorld :message="message" good="123" class="active" @click="message= message.split('').reverse().join('')"/>
  
</template>

<script>
// import {computed} from  'vue'
import HelloWorld from '~/components/HelloWorld.vue'

export default {
  components: {
    HelloWorld,
  },
  data(){
    return {
      message: 'Hello heropy'
    }
  }
}
</script> -->

<template>
  <TheHeader></TheHeader>
  <RouterView/>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
export default {
  components: {
    TheHeader
  }
}
</script>