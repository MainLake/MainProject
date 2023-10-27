import { Schema } from "mongoose";

const userSchema = new Schema({
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

const categoriaSchema = new Schema({
    nombre_categoria: {
        type: String,
        require: true
    },
    proyecto: {
        type: String,
        require: true
    }
});

const colaboradorSchema = new Schema({
    colaborador: {
        type: Schema.Types.ObjectId,
        ref: 'usuario'
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: 'proyecto'
    },
    permisos: {
        super: {
            type: Boolean,
            default: false
        },
        mod_proyecto: {
            type: Boolean,
            default: false
        },
        mod_tareas: {
            type: Boolean,
            default: true
        }
    }
});

const tareaSchema = new Schema({
    nombre_tarea: {
        type: String,
        default: "",
        require: true
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: 'proyecto',
        require: true
    },
    descripcion_tarea: {
        type: String,
        default: "",
        require: false
    },
    asignado: {
        type: Schema.Types.ObjectId,
        ref: 'usuario', 
        require: fasle
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'categoria'  
    },
    detalle: {
        fecha_creacion: {
            type: Date,
            default: new Date()
        },
        fecha_inicio: {
            type: Date,
            require: false 
        },
        fecha_limite: {
            type: Date,
            require: false
        },
        estado: {
            type: String,
            default: "pendiente"
        }
    }
});


const conjuntoTareasSchema = new Schema({
    nombrer_conjunto: {
        type: String,
        require: true
    },
    categoria: {
        type: String,
        require: true
    },
    asigando: {
        type: Schema.Types.ObjectId,
        require: false,
        ref: 'usuario'
    },
    tareas: [
        {
            type: Schema.Types.ObjectId,
            ref: 'tarea'
        }
    ],
    detalle: {
        fecha_creacion: {
            type: Date,
            default: new Date()
        },
        fecha_inicio: {
            type: Date,
            require: false 
        },
        fecha_limite: {
            type: Date,
            require: false
        },
        estado: {
            type: String,
            default: "pendiente"
        }
    }
});

const proyectoSchema = new Schema({
    nombre_proyecto: {
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        require: false
    },
    creador: {
        type: String,
        require: true
    },
    colaboradores: [
        {
            type: Schema.Types.ObjectId,
            ref: 'colaborador'
        }
    ],
    tareas: [
        {
            type: Schema.Types.ObjectId,
            ref: 'tarea'
        }
    ],
    conjuntos_tareas: [
        {
            type: Schema.Types.ObjectId,
            ref: 'conjunto_tareas'
        }
    ],
    detalle: {
        fecha_creacion: {
            type: Date,
            default: new Date()
        },
        fecha_inicio: {
            type: Date,
            require: false
        },
        fecha_limite: {
            type: Date,
            require: false
        },
        estado: {
            type: String,
            default: "pendiente"
        }
   }
});

exports = {
    userSchema, 
    colaboradorSchema,
    tareaSchema,
    categoriaSchema,
    conjuntoTareasSchema,
    proyectoSchema,
}