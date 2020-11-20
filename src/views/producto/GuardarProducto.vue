<template>
    <div>
        <h3>Registrar nuevo producto</h3>
        <FormularioProductoComponent />
    </div>
</template>

<script>

import FormularioProductoComponent from '../../components/producto/FormularioProductoComponent'

export default {
    components: {
        FormularioProductoComponent
    },
    name:"GuardarProducto"
}
</script>