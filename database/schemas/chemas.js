import { Schema } from "mongoose";

const user = new Schema({
    nombre: {
        type: String,
        require: true
    },
    apellidos: {
        type: String,
        require: true
    },
    credenciales: {
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        verificado: {
            type: Boolean,
            default: false
        }
    }
});


const 