
import {Action,handleActions} from "redux-actions";


import {GETTING_REPOSITORY} from "../action/ActionTypes";


export default handleActions<boolean,boolean>(
    {
        [GETTING_REPOSITORY]:(state:boolean,action :Action<boolean>) : boolean =>{



            return action.payload;

        }

    },
    false
)
