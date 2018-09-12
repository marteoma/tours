<template>
  <header>
    <h4 @click="cerrarSesion">Cerrar Sesión</h4>
  </header>
</template>

<script>
import MainService from '@/Services/MainService'
export default {
  name: 'HeaderComponent',
  methods: {
    async cerrarSesion () {
      await MainService.cerrarSesion(this)
    }
  }
}
</script>

<style scoped>
  header {
    display: flex;
    flex-direction: column;
    align-content: center;
    background-color: darkseagreen;
  }
  h4 {
    cursor: pointer;
    text-decoration: underline;
  }
</style>
