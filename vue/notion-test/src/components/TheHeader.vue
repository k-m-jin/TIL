<template>
  <header>
    Header!!
    <!-- <div>{{ workspaceStore.currentWorkspacePath }}</div> -->
    <ul>
      <li
        v-for="path in workspaceStore.currentWorkspacePath"
        :key="path.id">
        <RouterLink :to="`/workspaces/${path.id}`">
          {{ path.title || '제목없음' }}
        </RouterLink>
      </li>
    </ul>
  </header>
</template>

<script>
import {mapStores} from 'pinia'
import { useWorkspaceStore } from '~/store/workspace'

export default {
  computed: {
    ...mapStores(useWorkspaceStore),
    workspacesLoaded() {
      return this.workspaceStore.workspacesLoaded
    }
  },
  watch: {
    workspacesLoaded(value){
    value && this.workspaceStore.findWorkspacePath(this.$route.params.id)
    },
    //페이지 바뀔때마다 
    $route() {
      this.workspaceStore.findWorkspacePath(this.$route.params.id)
    }
  },
  
}
</script>
