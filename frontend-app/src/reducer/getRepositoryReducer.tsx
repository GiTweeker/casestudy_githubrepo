
import {Action,handleActions} from "redux-actions";

import {RepositoryItem} from "../models/searchrepo/SearchRepo";
import {GET_REPOSITORY_SUCCESS} from "../action/ActionTypes";



export default handleActions<RepositoryItem,RepositoryItem>(
    {
        [GET_REPOSITORY_SUCCESS]:(state:RepositoryItem,action :Action<RepositoryItem>) : RepositoryItem =>{


            if(!!action.payload){

                return action.payload;
            }
            return state;
        }

    },
    {} as RepositoryItem
)
