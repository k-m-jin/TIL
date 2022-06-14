import { defineStore } from 'pinia'
// import router from '~/routers'

export const useWorkspaceStore = defineStore('workspace', {
  state() {
    return {
      // workspace: null,
      workspace: {},
      workspaces: [],
      currentWorkspacePath: [],
    }
  },
  getters: {},
  actions: {
    //C
    async createWorkspace(payload = {}) {
      const { parentId } = payload
      await request({
        method: 'POST',
        body: {
          //워크스페이스가 생성될땐 내용이 없음.
          parentId,
          title: '',
        },
      })
      this.readWorkspaces()
    },
    //R
    async readWorkspaces() {
      const workspaces = await request({
        method: 'GET',
      })
      console.log(workspaces)

      this.workspaces = workspaces
    },

    async readWorkspace(id) {
      const workspace = await request({
        method: 'GET',
        id,
      })
      console.log(workspace)
      this.workspace = workspace
    },
    //U
    async updateWorkspace(payload) {
      const { id, title, content, poster } = payload
      const updateWorkspace = await request({
        method: 'PUT',
        id,
        body: {
          title,
          content,
          poster,
        },
      })
      this.workspace = updateWorkspace

      this.readWorkspace()
    },

    //D
    async deleteWorkspace(id) {
      await request({
        method: 'DELETE',
        id,
      })
      this.readWorkspaces()
    },

    // findWorkspacePath() {
    //   // router.currentRoute.value === $route
    //   const currentWorkspaceId = router.currentRoute.value.params.id
    //   function find(workspace, parents) {
    //     if (currentWorkspaceId === workspace.id) {
    //       this.currentWorkspacePath = [...parents, workspace]
    //     }
    //     if (workspace.children) {
    //       workspace.children.forEach((ws) => {
    //         find(ws, [...parents, workspace])
    //       })
    //     }
    //   }
    //   this.workspaces.forEach((workspace) => {
    //     find(workspace, [])
    //   })
    // },
  },
})

async function request(options) {
  const { id = '', method, body } = options
  const res = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/notion/workspaces/${id}`, {
    method,
    headers: {
      'content-type': 'application/json',
      apikey: 'FcKdtJs202204',
      username: 'KDT2_KimMyeongJin',
    },
    body: JSON.stringify(body),
  })
  return res.json()
}
