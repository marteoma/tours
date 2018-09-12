<template>
  <div>
    <datatable :title="title" :columns="columns" :rows="data.data"
                :clickable="true"></datatable>
  </div>
</template>

<script>
import DataTable from 'vue-materialize-datatable'
import API from '@/services/API'
export default {
  components: {'datatable': DataTable},
  name: 'Reservas',
  data () {
    return {
      title: 'Reservas',
      columns: [
        {
          label: 'Viajero',
          field: 'usuario'
        },
        {
          label: 'Telefono',
          field: 'telefono'
        },
        {
          label: 'Fecha',
          field: 'fecha'
        },
        {
          label: 'Encargado',
          field: 'encargado'
        },
        {
          label: 'Destino',
          field: 'destino'
        },
        {
          label: 'Precio',
          field: 'precio'
        },
        {
          label: 'Ruta',
          field: 'ruta'
        }
      ],
      data: []
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      API().get('reservas')
        .then(d => {
          this.data = d
        })
    }
  }
}
</script>

<style scoped>
@import url(http://fonts.googleapis.com/icon?family=Material+Icons);

</style>
