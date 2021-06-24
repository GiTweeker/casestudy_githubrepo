
import {Action,handleActions} from "redux-actions";

import {SEARCH_REPOSITORY_FAILURE} from "../action/ActionTypes";



export default handleActions<String,String>(
    {
        [SEARCH_REPOSITORY_FAILURE]:(state:String,action :Action<String>) : String =>{

                if(!action.payload){

                    return "";
                }
                return action.payload;

        }

    },
    ""
)
