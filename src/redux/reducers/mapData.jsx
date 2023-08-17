import {FETCH_MAPA,SELECT_DATA,ADD_TODO_STARTED,ADD_TODO_FAILURE} from "./../actionType"
const initialState = {/* "datos":[
{correo: "mailto:gbattistf@sena.edu.co",
    direccion: "Avenida Francisco Newball",
    fecha: "2020-09-03T19:09:44Z",
    id: "120",
    nombreCentro: "Centro de Formación Turística, Gente de Mar y de Servicios",
    nombres: "Gina Battist Franco",
    regional: "San Andrés",
},{
    correo: "mailto:oapena@sena.edu.co",
    direccion: "Calle 16 No. 27-37",
    fecha: "2020-09-03T19:09:44Z",
    id: "121",
    nombreCentro: "Despacho Dirección",
    nombres: "Oscar Alfonso Peña Amaya",
    regional: "Santander",

}
] */
}

const initialStateSelect={
    /* correo: "mailto:oapena@sena.edu.co",
    direccion: "Calle 16 No. 27-37",
    fecha: "2020-09-03T19:09:44Z",
    id: "121",
    nombreCentro: "Despacho Dirección",
    nombres: "Oscar Alfonso Peña Amaya",
    regional: "Santander" */
}


export const datosMapa=(state = initialState, { type, payload }) => {//action.type y action.payload
    switch (type) {
    case ADD_TODO_STARTED:
      return {
        ...state,
        loading: true
      };
    case FETCH_MAPA:
       // console.log("entra en el reducer",payload)
        return { ...state,loading: false,error:null, ...payload }
    case ADD_TODO_FAILURE:
            return {
              ...state,
              loading: false,
              error: payload.error
        };
    default:
        return state
    }
}

export const datosSelecionados=(state = initialStateSelect, { type, payload }) => {//action.type y action.payload
    switch (type) {

    case SELECT_DATA:
        return {  ...payload }

    default:
        return state
    }
}

