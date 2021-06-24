
import {Action,handleActions} from "redux-actions";

import {SearchRepoData} from "../models/searchrepo/SearchRepo";
import {SEARCH_REPOSITORY_SUCCESS} from "../action/ActionTypes";


// import {mergeVerifiedFieldWithState} from "../util/XpathFieldUtil";


export default handleActions<SearchRepoData,SearchRepoData>(
    {
        [SEARCH_REPOSITORY_SUCCESS]:(state:SearchRepoData,action :Action<SearchRepoData>) : SearchRepoData =>{

            debugger;
            if(!!action.payload){

                return action.payload;
            }
            return state;
        }

    },
    {} as SearchRepoData
)
