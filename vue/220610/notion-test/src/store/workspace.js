// import { defineStore } from 'pinia'

// export const useWorkspaceStore = defineStore('workspace', {
//   state() {
//     return {}
//   },
//   getters: {},
//   actions: {
//     async createWorkspace() {
//       const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/notion/workspaces', {
//         method: 'POST',
//         headers: {
//           'content-type': 'application/json',
//           apikey: 'FcKdtJs202204',
//           username: 'KDT2_KimMyeongJin',
//         },
//         body: JSON.stringify({
//           // parentId: '',
//           title: 'first workspace',
//           content: '하이~',
//           // poster: ''
//         }),
//       })
//       const workspace = await res.json()
//       console.log(workspace)
//     },
//   },
// })

import { defineStore } from 'pinia'

export const useWorkSpaceStore = defineStore('workspace', {
  state() {
    return {}
  },
  getters: {},
  actions: {
    //CRUD
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
          title: '처음만드는 워크스페이이스',
          content: '내용.....',
          // poster: ''
        }),
      })
      const workspace = await res.json()
      console.log(workspace)
    },
  },
})
