import API from '@/services/API'

export default {
  login (body, vue) {
    API().post('login', body)
      .then(res => {
        console.log(res.data)
        if (res.data.state === 'ok') {
          vue.$router.push({ name: 'Main' })
        } else {
          vue.error = true
        }
      })
  }
}
