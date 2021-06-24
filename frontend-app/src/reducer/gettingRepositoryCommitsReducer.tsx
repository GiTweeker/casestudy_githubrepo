import {Action, handleActions} from "redux-actions";


import {GETTING_REPOSITORY_COMMITS} from "../action/ActionTypes";


export default handleActions<boolean,boolean>(
    {
        [GETTING_REPOSITORY_COMMITS]:(state:boolean,action :Action<boolean>) : boolean =>{



            return action.payload;

        }

    },
    false
)
