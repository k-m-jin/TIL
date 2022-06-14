<template>
  <ul>
    <WorkspaceItem
      v-for="workspace in workspaceStore.workspaces"
      :key="workspace.id" 
      :workspace="workspace" />
  </ul>
</template>
<script>
import { mapStores } from 'pinia'
import { useWorkspaceStore } from '~/store/workspace'
import WorkspaceItem from './WorkspaceItem.vue'
export default {
  components: {
    WorkspaceItem
  },
  computed: {
    ...mapStores(useWorkspaceStore)
  },
  created() {
    this.workspaceStore.readWorkspaces()
  }
}

</script>
