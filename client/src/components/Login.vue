<template>
  <div class="container">
    <h5 v-show="error">Usuario o contraseña incorrectos</h5>
    <input type="text" name="user" v-model="user" placeholder="User">
    <input type="password" name="password" v-model="password" placeholder="Password">
    <button type="submit" @click="login">Entrar</button>
  </div>
</template>

<script>
import LoginService from '@/Services/LoginService'
export default {
  data () {
    return {
      user: '',
      password: '',
      error: false
    }
  },
  methods: {
    login () {
      LoginService.login({
        user: this.user,
        password: this.password
      }, this)
    }
  }
}
</script>
