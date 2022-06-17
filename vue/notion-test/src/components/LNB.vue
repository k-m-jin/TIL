<template>
  <nav>
    <div class="header">
      <div class="user-profile"></div>
      jini's Notion
    </div>
    <ul class="workspaces">
      <WorkspaceItem
        v-for="workspace in workspaceStore.workspaces"
        :key="workspace.id" 
        :workspace="workspace" />
    </ul>
    <div class="actions">
      <div
        class="action"
        @click="workspaceStore.createWorkspace">
        <span class="material-symbols-rounded">
          add
        </span>
        새로운 페이지
      </div>
    </div>
  </nav>
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

<style scoped lang="scss">
//scss 폴더에서 scss 파일을 가져올땐 확장자 생략가능
/* @import "~/scss/variables"; */

nav {
  max-width: 500px;
  min-width: 160px;
  height: 100%;
  background-color: $color-background;
  flex-shrink: 0; // 뷰포트 가로 너비가 작을 때 찌그러짐 방지
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  .header {
    padding: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;
    .user-profile {
      width: 20px;
      height: 20px;
      border-radius: 4px;
      margin-right: 10px;
      background-image: url("https://avatars.githubusercontent.com/u/87857358?s=60&v=4");
      background-size: cover;
    }
  }
  ul.workspaces {
    flex-grow: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .actions {
    border-top: 1px solid $color-border;
    .action {
      height: 45px;
      display: flex;
      align-items: center;
      padding: 0 14px;
      color: $color-icon;
      cursor: pointer;
      &:hover {
        background-color: $color-background--hover1;
      }
      .material-symbols-rounded {
        margin-right: 4px;
        color: $color-icon;
      }
    }
  }
}
</style>
