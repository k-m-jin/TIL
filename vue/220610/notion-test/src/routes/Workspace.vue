<template>
  <h1>Workspace!</h1>
  <button @click="workspaceStore.createWorkspace">
    워크스페이스 생성
  </button>
  <!-- <button @click="workspaceStore.readWorkspaces">
    워크스페이스 조회
  </button> -->

  <section
    :key="$route.params.id">
    <h1
      ref="title"
      placeholder="제목없음"
      contenteditable
      @keydown.prevent.enter="$refs.content.focus"
      @blur="onInput">
      {{ workspaceStore.workspace.title }}
    </h1>
    <p
      ref="content"
      placeholder="내용을 입력하세요!"
      contenteditable
      @blur="onInput"
      v-html="workspaceStore.workspace.content">
    </p>
  </section>
  <!-- 줄바굼이 div 요로 감싸짐 -->
  <!-- <div contenteditable>
    heropy
  </div> -->
</template>

<script>
import { mapStores } from 'pinia'
import { useWorkspaceStore } from '~/store/workspace'

export default {
  computed: {
    ...mapStores(useWorkspaceStore)
  },
  watch: {
    //페이지가 바뀔때마다
    $route( ){
      this.workspaceStore.readWorkspace(this.$route.params.id)
    }
  },
  created(){
    this.workspaceStore.readWorkspace(this.$route.params.id)
  },
  methods: {
    onInput(){
      //const title = event.target.value 랑 같음
      // 일반 양식에서는 위처럼 contenteditavle 에서는 아래처럼 값을 알아낸다
      const title = this.$refs.title.textContent
      const content = this.$refs.content.innerHTML
      
      //title이 없을땐 저장되면 안됌!
      if(!title.trim()){
        this.$refs.content.innerHTML=''
      }
      if(!this.$refs.content.textContent.trim()){
        this.$refs.content.innerHTML=''
      }

      this.workspaceStore.updateWorkspace({
        id:this.$route.params.id,
        title,
        content
      })
    }
  }
}
</script>
<style scoped lang="scss">
[contenteditable] {
  &:empty::before {
    content: attr(placeholder);
    color: lightgrey;
  }
}
</style>
