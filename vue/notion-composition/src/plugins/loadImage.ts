import { App } from 'vue'

export const loadImage = (src: string) => {
  return new Promise(resolve => {
    const img = document.createElement('img')
    img.src = src
    img.addEventListener('load', () => {
      resolve(true)
    })
  })
}

//optionsAPI에서 this 로 쓰기 위해
export default {
  install(app: App) {
    app.config.globalProperties.$loadImage = loadImage
  }
}

//ts 설정
declare module 'vue' {
  interface ComponentCustomProperties {
    $loadImage: (src: string) => Promise<undefined>
  }
}
