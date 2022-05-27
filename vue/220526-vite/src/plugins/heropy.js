export default {
  install(app){
    app.config.globalProperties.$heropy = (msg = 'mang') =>{
      return `heropy!! ${msg}`
    }
  }
}