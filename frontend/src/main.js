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
        <form @submit.prevent="handleSubmit" class="container border d-flex flex-column justify-content-center align-items-center p-4 rounded-5" style="max-width: 500px; min-width: 300px height: 500px">
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
                <input class="form-control" id="usuario" type="text" placeholder="UnPpPérez.." v-model="username" />
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
        username: '',
        birth: '',
    }),

    methods: {
        // Función para generar un número aleatorio
        getRandomInt(max) {
            return Math.floor(Math.random() * max);
        },
        // Función para generar un carácter aleatorio
        getRandomCharacter() {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        },
        // Función para generar un key aleatorio
        getRandomKey() {

            // Crear key
            let key = '';

            // Generar key
            let i = 0;
            while(i < 8){
                // Añadir un número o un carácter aleatorio
                if(i % 2 === 0){
                    // Si es par añade un dígito
                    key += this.getRandomInt(10);
                } else {
                    // Si es impar añade un carácter
                    key += this.getRandomCharacter();
                }
                ++i
            }
             
            // Devolver el id
            return key;

        },
        // Función para calcular la edad a partir de una fecha 'aaaa-mm-dd'
        getAge(birth) {
            // Obtener la fecha actual
            const today = new Date();
            // Obtener la fecha de nacimiento
            const birthDate = new Date(birth);
            // Calcular la edad
            let age = today.getFullYear() - birthDate.getFullYear();
            const month = today.getMonth() - birthDate.getMonth();
            if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            // Devolver la edad
            return age;
        },
        // Función para enviar el formulario
        handleSubmit() {  

            // Obtener el key
            let key = this.getRandomKey();

            //Crear usuario
            const user = {
                key: key,
                name: this.name,
                lastName: this.lastName,
                fullName: `${this.name} ${this.lastName}`,
                username: this.username,
                age: this.getAge(this.birth)
            };

            // Agregar el usuario
            axios.post('http://localhost:4000/api/users/register', { user: user })
                .then(({ data })=> {
                    // Obtener el resultado
                    const { res } = data;
                    // Si el resultado es 'Usuario creado con éxito', se muestra un mensaje de éxito
                    swal('Buen trabajo', `${res}`, 'success');
                }).catch(({ response }) => {
                    // Si hay relacionado con la petición un error, se muestra un mensaje de error en la consola
                    swal('Error', `${response.data.res}`, 'error');
                    console.log(response.data.res);
                });

            // Restablecer los campos
            this.name = '';
            this.lastName = '';
            this.username = '';
            this.birth ='';

            axios.get('http://localhost:4000/api/users/users')
                .then(({ data })=> {
                    // Obtener el resultado
                    const { res } = data;
                    // Mostrar el resultado en la consola
                    console.log( res );
                }).catch(({ response }) => {
                    // Si hay relacionado con la petición un error, se muestra un mensaje de error en la consola
                    console.log(response.data.res);
                });

        }
    }

});

// Montaje de la aplicación
app.mount('#app');
