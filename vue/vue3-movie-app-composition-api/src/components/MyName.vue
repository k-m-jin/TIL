<script setup lang="ts">
import { watch, toRef, toRefs } from 'vue'

const $props = defineProps({
  name: {
    type: String,
    required: true
  },
  suffix: {
    type: String,
    default: '...'
  }
})
const $emit = defineEmits(['rename'])

// 객체구조 분해할당을 할때 반응성이 증발 해버림
// const { name } = $props
const { name } = toRefs($props)
// const  name  = toRef($props,'name')
const suffix = toRef($props, 'suffix')

watch(
  () => name,
  newValue => console.log('Changed $props.name:', newValue)
)

function rename() {
  $emit('rename', 'YoungWoong')
}
</script>

<template>
  <h3>My name is {{ name }}{{ suffix }}</h3>
  <!-- <button @click="$emit('rename', 'YoungWoong')"> -->
  <button @click="rename">
    Rename!
  </button>
</template>
