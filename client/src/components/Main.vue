<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div class="main">
      <nav>
        <div class="but"><h2 @click="changeReservar">Reservar</h2></div>
        <div class="but"><h2 @click="changeReservas">Buscar</h2></div>
      </nav>
      <component :is="currentView"/>
    </div>
  </div>
</template>

<script>
import Reservar from '@/components/Reservar'
import Reservas from '@/components/Reservas'
import MainService from '@/Services/MainService'
export default {
  components: {Reservar, Reservas},
  name: 'Main',
  data () {
    return {
      currentView: 'Reservar'
    }
  },
  mounted () {
    this.get()
  },
  methods: {
    async get () {
      const response = await MainService.get()
      if (response.data === 'No autorizado') {
        this.$router.push({ name: 'Login' })
      }
    },
    changeReservar () {
      this.currentView = 'Reservar'
    },
    changeReservas () {
      this.currentView = 'Reservas'
    }
  }
}
</script>

<style scoped>
  nav {
    display: flex;
    justify-content: space-around;
    background-color: lemonchiffon;
    margin-bottom: 15px;
  }
  .but {
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
  .but:hover {
    background-color: aquamarine;
  }
</style>
