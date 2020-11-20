<template>
    <div>
        <form>        
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" v-model="nombre">
            <br>
            <label for="precio">Precio</label>
            <input type="number" name="precio" id="precio" v-model="precio">
            <br>
            <label for="stock">Stock</label>
            <input type="number" name="stock" id="stock" v-model="stock">
            <br>

            <label for="categoria">Categoria</label>
            <select name="categoria" id="categoria" v-model="categoria">
                <option value="">Seleccionar</option>
                <option v-for="c in categorias" :key="c.id" :value="c.id">{{ c.nombre }}</option>                
            </select>
            <br>
            <button @click="guardar" type="button" :disabled="guardando">Guardar</button>
        
        </form>
        
    </div>
</template>

<script>
export default {
    name:"FormularioProductoComponent",
    data: function(){
        return {
            nombre: null,
            precio: null,
            stock: null,
            categoria: "",
            guardando: false,
            categorias:[]
        }
    },
    created(){
        this.cargarCategorias();
    },
    methods: {
        async guardar(){
            this.guardando = true;
            let url = process.env.VUE_APP_URL_API + "productos/"
            let data = {
                nombre: this.nombre,
                precio: this.precio,
                stock: this.stock,
                categoria_id: this.categoria,
                
            }
            let resultado = await fetch(url, {
                headers: {
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                },
                method: "post",
                body: JSON.stringify(data)
            })

            this.guardando = false;

            if (resultado.status != 200 && resultado.status != 201)
            {
                alert("ha ocurrido un error")
                return;
            }

            alert("Guardado correctamente")
        },
        async cargarCategorias(){
            let url = process.env.VUE_APP_URL_API + "categorias/"
            let respuesta = await fetch(url)
            this.categorias = await respuesta.json()
        }
    }
}
</script>