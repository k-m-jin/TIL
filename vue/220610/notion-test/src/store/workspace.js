import { defineStore } from 'pinia'

export const useWorkspaceStore = defineStore('workspace', {
  state() {
    return {
      // workspace: null,
      workspace: {},
      workspaces: [],
    }
  },
  getters: {},
  actions: {
    //C
    async createWorkspace() {
      const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/notion/workspaces', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          apikey: 'FcKdtJs202204',
          username: 'KDT2_KimMyeongJin',
        },
        body: JSON.stringify({
          // parentId: '',
          title: ' 워크스페이스',
          content: 'sldkfldkf',
          // poster: ''
        }),
      })
      const workspace = await res.json()
      console.log(workspace)
      this.readWorkspaces()
    },
    //R
    async readWorkspaces() {
      const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/notion/workspaces', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          apikey: 'FcKdtJs202204',
          username: 'KDT2_KimMyeongJin',
        },
      })
      const workspaces = await res.json()
      console.log(workspaces)

      this.workspaces = workspaces
    },
    async readWorkspace(id) {
      const res = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/notion/workspaces/${id}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          apikey: 'FcKdtJs202204',
          username: 'KDT2_KimMyeongJin',
        },
      })
      const workspace = await res.json()
      console.log(workspace)
      this.workspace = workspace
    },
    //U
    async updateWorkspace(payload) {
      const { id, title, content } = payload
      await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/notion/workspaces/${id}`, {
        method: 'PUT',
        headers: {
          // 'Access-Control-Allow-Origin': '*',
          'content-type': 'application/json',
          apikey: 'FcKdtJs202204',
          username: 'KDT2_KimMyeongJin',
        },
        body: JSON.stringify({
          title,
          content,
        }),
      })
      this.readWorkspace()
    },

    //D
    async deleteWorkspace(id) {
      await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/notion/workspaces/${id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          apikey: 'FcKdtJs202204',
          username: 'KDT2_KimMyeongJin',
        },
      })
      this.readWorkspaces()
    },
  },
})
