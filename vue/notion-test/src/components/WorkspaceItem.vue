<template>
  <li>
    <div
      :style="{paddingLeft: `${14 * depth}px`}"
      :class="{ active: workspace.id === $route.params.id}"
      class="item"
      @click="$router.push(`/workspaces/${workspace.id}`)">
      <div 
        :class="{active:showChildren}"
        class="material-symbols-rounded"
        @click.stop="showChildren = !showChildren">
        play_arrow
      </div>
      <div class="title">
        {{ workspace.title || '제목 없음' }}
      </div>
      <div class="actions">
        <div
          class="material-symbols-rounded"
          @click.stop="workspaceStore.createWorkspace({parentId:workspace.id})">
          add
        </div> <div
          class="material-symbols-rounded"
          @click.stop="workspaceStore.deleteWorkspace(workspace.id)">
          delete
        </div>
      </div>
    </div>

    <div
      v-if="!workspace.children && showChildren"
      :style="{ paddingLeft: `${14 * depth + 22}px`}"
      class="no-children">
      하위 페이지가 없습니다.
    </div>
    <!-- 재귀 컴포넌트 -->
    <ul v-if="workspace.children && showChildren">
      <WorkspaceItem
        v-for="ws in workspace.children"
        :key="ws.id" 
        :workspace="ws"
        :depth="depth + 1" />
    </ul>
  </li>
</template>

<script>
import {mapStores} from 'pinia'
import {useWorkspaceStore} from '~/store/workspace'


export default {
  props:{
    workspace:{
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      default: 1
    }
  },
  data(){
    return {
      showChildren: false
    }
  },
  computed: {
    ...mapStores(useWorkspaceStore)
  },
  created() {
    this.showChildren = this.workspaceStore.currentWorkspacePath.some(workspace => {
      return workspace.id === this.workspace.id
    })
  }
}
</script>

<style lang="scss" scoped>
li {
  cursor: pointer;
  user-select: none;
  .item {
    display: flex;
    align-items: center;
    white-space: nowrap;
    height: 30px;
    padding: 0 14px;
    position: relative;
    color: rgba($color-font, .7);
    &:hover {
      background-color: $color-background--hover1;
      padding-right: 4px;
      .actions {
        display: flex;
      }
    }
    &.active {
      .title {
        font-weight: 700;
        color: rgba($color-font, .8);
      }
    }
    .material-symbols-rounded {
      font-size: 18px;
      color: $color-icon;
      margin-right: 4px;
      &:hover {
        background-color: $color-background--hover2;
      }
      &.active {
        transform: rotate(90deg);
      }
    }
    .title {
      flex-grow: 1;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .actions {
      display: none;
      align-items: center;
    }
  }
  .no-children {
    color: rgba($color-font, .35);
    height: 30px;
    display: flex;
    align-items: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
