// Descripción: Archivo principal de la aplicación

// Importación de Vue
const { createApp } = Vue;

// Creación de la aplicación
const app = createApp({
    data: () => ({
        message: 'Hello World!'
    })
});

// Componente de formulario
app.component("form-component", {
    
    template: `
        <form @submit.prevent="handleSubmit" class="container border d-flex flex-column justify-content-center align-items-center p-4 rounded-5" style="max-width: 500px; min-width: 300px">
            <div class="form-group w-75">
                <h1 class="text-white"><b>Formulario de Registro</b></h1>
            </div>
            <div class="form-group w-75">
                <label class="text-white form-label" for="name">Nombre:</label>
                <input class="form-control" id="name" type="text" placeholder="Pepito.." v-model="name" />
            </div>
            <div class="form-group w-75">
                <label class="text-white form-label" for="lastName">Apellido:</label>
                <input class="form-control" id="lastName" type="text" placeholder="Pérez.." v-model="lastName" />
            </div>
            <div class="form-group w-75">
                <label class="text-white form-label" for="user">Usuario:</label>
                <input class="form-control" id="usuario" type="text" placeholder="UnPpPérez.." v-model="user" />
            </div>
            <div class="form-group w-75">
                <label class="text-white form-label" for="birth">Fecha de Nacimiento:</label>
                <input class="form-control" id="birth" type="date" v-model="birth"/>
            </div>
            <div class="form-group pt-3 w-50">
                <input class="btn btn-primary w-100 rounded-5" style="height:50px" type="submit" value="Enviar" />
            </div>
        </form>
    `,

    data: () => ({
        name: '',
        lastName: '',
        user: '',
        birth: ''
    }),

    methods: {
        handleSubmit() {
            console.log(this.name, this.lastName, this.user, this.birth);
            this.name = '';
            this.lastName = '';
            this.user = '';
            this.birth ='';

        }
    }

});

// Montaje de la aplicación
app.mount('#app');
