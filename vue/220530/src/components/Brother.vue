<template>
<h1>{{count}}</h1>
<h1>{{$store.state.heropy.message}}</h1>
<button @click="$store.dispatch('message/updateMessage','Good!')" > update Message </button>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.this.state.count.count
    }
  }
}
</script>