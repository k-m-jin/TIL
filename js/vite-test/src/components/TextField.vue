<template>
  <input :value="modelValue"
  @input="$emit('update:modelValue', $event.target.value)"/>
</template>
<script>
export default {
  props:{
    modelValue: {
      type: String,
      default: ''
    }
  },
emits: ['update:modelValue']
}
</script>
<!-- scoped 해당 템플릿 안에서만 유효 -->
<style scoped>
 input{
   background-color: red;
 }
</style>