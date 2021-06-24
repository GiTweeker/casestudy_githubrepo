import {Action, handleActions} from "redux-actions";


import {GETTING_REPOSITORY_COMMITS_STATS} from "../action/ActionTypes";


export default handleActions<boolean,boolean>(
    {
        [GETTING_REPOSITORY_COMMITS_STATS]:(state:boolean,action :Action<boolean>) : boolean =>{



            return action.payload;

        }

    },
    false
)
