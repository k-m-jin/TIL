<template>
  <header>
    <div class="path">
      <template
        v-for="(path, index) in workspaceStore.currentWorkspacePath"
        :key="path.id">
        <span 
          v-if="index > 0"
          class="divider">
          <i class="fa-solid fa-angle-right"></i>
        </span>
        <button
          class="title"
          @click="$router.push(`/workspaces/${path.id}`)">
          {{ path.title || '제목 없음' }}
        </button>
      </template>
    </div>
    <div class="actions">
      <button><i class="fa-brands fa-github"></i></button>
      <button><i class="fa-solid fa-share"></i></button>
      <button><i class="fa-solid fa-circle-down"></i></button>
      <button><i class="fa-solid fa-star"></i></button>
      <button><i class="fa-solid fa-house"></i></button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed , watch } from 'vue'
import {useRoute} from 'vue-router'
import { useWorkspaceStore } from '~/store/workspace'

const route = useRoute()
const workspaceStore = useWorkspaceStore()
const currentWorkspaceId = computed(() => {
   return route.params.id as string
})

//감시해야하는 대상은 값이 아니라 ref 객체여야 함
watch(
  //값일때는 콜백의 리턴으로 해줘야함!
  ()=> workspaceStore.workspacesLoaded,
  loaded => {
    loaded && workspaceStore.findWorkspacePath(currentWorkspaceId.value)
}) 
watch(route,()=> {
  workspaceStore.findWorkspacePath(currentWorkspaceId.value)
})
</script>

<style lang="scss" scoped>
header {
  flex-shrink: 0;
  height: 50px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  overflow: auto;
  .path {
    flex-grow: 1;
    display: flex;
    align-items: center;
    overflow: hidden;
    span.divider {
      margin: 0 2px;
      color: rgba($color-font, .4);
      font-size: 14px;
    }
    .title {
      font-size: 14px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  .actions {
    display: flex;
    flex-shrink: 0;
  }
}
button {
  height: 34px;
  padding: 0 12px;
  border: none;
  border-radius: 4px;
  color: $color-icon;
  outline: none;
  background: none;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  &:hover {
    background-color: $color-background;
  }
  &:nth-child(1) { font-size: 20px; }
  &:nth-child(2) { font-size: 19px; }
}
</style>
