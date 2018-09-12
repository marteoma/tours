import API from '@/services/API'

export default {
  get () {
    return API().get('main')
  },
  cerrarSesion (vue) {
    API().post('logout')
    vue.$router.push({name: 'Login'})
  }
}
