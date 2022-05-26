import { createApp } from 'vue'
// import heropy from './plugins/heropy'

// 폴더에서 기본이 되어 있는 인덱스를 찾으므로 생략가능
// import store from './store/indexjs'
import store from './store'
import App from './App.vue'
import App2 from './App2.vue'


// createApp(App)
// .use(store)
// .mount('#app')

createApp(App2)
.use(store)
.mount('#app')
