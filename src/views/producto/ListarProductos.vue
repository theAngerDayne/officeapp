<template>
    <div>
        <h3>Listado de productos</h3>
        <ListadoProductosComponent />
    </div>

</template>

<script>

import ListadoProductosComponent from '../../components/producto/ListadoProductosComponent'


export default {
    components:{
        ListadoProductosComponent
        
    },
    name: "ListarProductos"
}
</script>