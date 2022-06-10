<template>
  <h1>Workspace!</h1>
  <button @click="workspaceStore.createWorkspace">
    워크스페이스 생성
  </button>
</template>

<script>
import { mapStores } from 'pinia'
import { useWorkSpaceStore } from '~/store/workspace'

export default {
  computed: {
    ...mapStores(useWorkSpaceStore)
  }
}
</script>
