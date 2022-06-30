<script setup lang="ts">
// ref : 1.반응형 데이터 만들기 2. this.$refs 요소참조
import { ref } from 'vue'
import MyName from '~/components/MyName.vue'

const name = ref('HEROPY')
</script>

<template>
  <h1>About!</h1>
  <MyName
    :name="name"
    @rename="name = $event" />
</template>
