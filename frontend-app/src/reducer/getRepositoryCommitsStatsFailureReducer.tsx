import {Action, handleActions} from "redux-actions";

import {GET_REPOSITORY_COMMITS_STATS_FAILURE} from "../action/ActionTypes";


export default handleActions<String,String>(
    {
        [GET_REPOSITORY_COMMITS_STATS_FAILURE]:(state:String,action :Action<String>) : String =>{

                if(!action.payload){

                    return "";
                }
                return action.payload;

        }

    },
    ""
)
