import {Action, handleActions} from "redux-actions";


import {GETTING_REPOSITORY_CONTRIBUTORS} from "../action/ActionTypes";


export default handleActions<boolean,boolean>(
    {
        [GETTING_REPOSITORY_CONTRIBUTORS]:(state:boolean,action :Action<boolean>) : boolean =>{



            return action.payload;

        }

    },
    false
)
