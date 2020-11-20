<template>
    <div>
        <table v-if="!cargando">
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Categoria</th>
            </tr> 
            <tr v-for="p in productos" :key="p.id">
                <td>{{ p.nombre }}</td>
                <td>{{ p.precio }}</td>
                <td>{{ p.stock }}</td>
                <td>{{ p.categoria.nombre }}</td>
            </tr>           
        </table>

        <div v-else>
            cargando...
        </div>
        
    </div>
</template>

<script>

export default {
    name:"ListadoProductosComponent",
    data: function(){
        return{
            productos: [],
            cargando: false
        }
    },
    created(){
        this.cargarProductos()
    },
    methods:{
        async cargarProductos(){
            this.cargando = true
            let url = process.env.VUE_APP_URL_API + "productos/"
            let datos = await fetch(url)
            this.productos = await datos.json()
            this.cargando = false;
        }
    }
}
</script>