<template>
  <header>
    <!-- default : router-active-calss -->
    <RouterLink to="/" active-class="active">Home..</RouterLink>
    <RouterLink to="/about" active-class="active">About..</RouterLink>
  </header>
</template>
<script>
export default {
  mounted(){
    // 이동하라! 라는 명령들이 들어있는 객체
    //명령은 실행을 해야하므로 함수
    //ex}push
    this.router
    // 현재 페이지에 대한 정보
    this.route
  }
}
</script>
<style scoped lang="scss">
  .active{
    color: red;
    font-weight: bold;
  }
</style>