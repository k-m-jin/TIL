<template>
  <div class="app__container">
    <LNB />
    <div class="app__page">
      <RouterView />
    </div>
  </div>
</template>
 <script>
 import LNB from '~/components/LNB.vue'
 export default {
   components: {
     LNB
 }
 }
 </script>

<style lang="scss" scoped>
.app {
  &__container {
    display: flex;
    height: 100vh;
    box-sizing: border-box;
  }
  &__page {
    flex-grow: 1;
    box-sizing: border-box;

  }  
  }
</style>
