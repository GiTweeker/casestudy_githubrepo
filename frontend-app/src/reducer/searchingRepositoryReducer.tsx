
import {Action,handleActions} from "redux-actions";


import {SEARCHING_REPOSITORY} from "../action/ActionTypes";


// import {mergeVerifiedFieldWithState} from "../util/XpathFieldUtil";


export default handleActions<boolean,boolean>(
    {
        [SEARCHING_REPOSITORY]:(state:boolean,action :Action<boolean>) : boolean =>{



            return action.payload;

        }

    },
    false
)
