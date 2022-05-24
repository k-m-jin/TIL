<template>
<!-- 텔레포트는 append랑 똑같이 동작 
특정요소를 전역화 시키는데 유용-->
<Teleport to="body">
    <!-- <div class="modal"> -->
    <div v-if="modelValue" class="modal">
    <div class="bg" @click="$emit('update:modelValue', false)"></div>
    <div class="contents"><slot></slot></div>
  </div>
</Teleport>
</template>
<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
.modal{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .bg {
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.707);
  }

  .contents {
    width: 200px;
    max-height: calc(100% - 100px);
    background-color:#fff;
    position: relative;
    overflow: auto;
  }
}
</style>