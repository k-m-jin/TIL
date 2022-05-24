<template>
  <!-- <h1> {{msg}}</h1>
  <TextField v-model="msg"/> -->
  <!-- <button @click="compName = 'ABC'">ABC</button>
  <button @click="compName = 'XYZ'">XYZ</button>
  <Component :is="compName" /> -->
  <div class="box">
  <Modal v-model="isShow">
  <h1> {{msg}} </h1>
    HEllo modal
  </Modal>
  </div>
  <button @click="isShow = true">On Modal!</button>
  <!-- <Component :is="Modal" /> -->
</template>
<script>
import TextField from '~/components/TextField.vue'
// import ABC from './components/ABC.vue'
// import XYZ from './components/ABC.vue'
import Modal from './components/Modal.vue'

export default ({
  components:{
    // TextField,
    // ABC,XYZ,
    Modal
  },
  data(){
    return {
      msg: 'hello Vue',
      // compName: 'ABC'
      isShow: false
      
    }
  }
  })
</script>
<style scoped lang="scss">
.box {
  width: 200px;
  height: 200px;
  position: fixed;
  bottom: 0;
  right: 0;
  border: 4px solid;
  background-color: red;
  transform: scale(1);
}
</style>