import vuePdf from './main.vue'

const vuePdfInstall = {
  install(Vue, options) {
    Vue.component(vuePdf.name, vuePdf)
  }
}
if (typeof window !== undefined && window.Vue) {
  window.Vue.use(vuePdfInstall)
}
export default vuePdfInstall