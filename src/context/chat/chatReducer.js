import { types } from "../../types/types";

export const chatReducer = ( state, action ) => {

    

    switch ( action.type ) {

        case types.usuariosCargados:
            return {
                ...state,
                usuarios: [...action.payload ]
            }
        case types.activarChat:
            if ( state.chatAction === action.payload ) return state;
            return {
                ...state,
                chatActivo: action.payload,
                mensaje: []

            }
    
        default:
            return state;
    }
}