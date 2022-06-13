<template>
  <ul>
    <li
      v-for="workspace in workspaceStore.workspaces"
      :key="workspace.id">
      <RouterLink :to="`/workspaces/${workspace.id}`">
        {{ workspace.title }}
      </RouterLink>
      <button @click="workspaceStore.deleteWorkspace(workspace.id)">
        삭제
      </button>
    </li>
  </ul>
</template>
<script>
import { mapStores } from 'pinia'
import { useWorkspaceStore } from '~/store/workspace'

export default {
  computed: {
    ...mapStores(useWorkspaceStore)
  },
  created() {
    this.workspaceStore.readWorkspaces()
  }
}

</script>
