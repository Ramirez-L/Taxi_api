const initialState = {
    // Query
    query: '',

    // datos
    datos: [{'Columna': "Fila"}],

    // Consulta
    consulta: ''

};

let Aux = undefined;

function rootReducer(state = Aux === undefined ? initialState : Aux, action) {
    switch (action.type) {
        case "GET_QUERY":
            return {
                ...state,
                datos: action.payload.data,
                query: action.payload.query,
                consulta: action.payload.consulta
            }

        case "CLEAR_STORE":
            return {
                ...state,
                query: action.payload.query,
                datos: action.payload.datos,
                consulta: action.payload.consulta
            }
   
        default:
            return state;
    }
}

export default rootReducer;