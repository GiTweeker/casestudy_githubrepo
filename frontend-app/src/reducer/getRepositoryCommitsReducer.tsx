import {Action, handleActions} from "redux-actions";
import {
    GET_REPOSITORY_COMMITS_SUCCESS,
} from "../action/ActionTypes";

import {RepoCommit} from "../models/repocommits/repocommits";


export default handleActions<RepoCommit[],RepoCommit[]>(
    {
        [GET_REPOSITORY_COMMITS_SUCCESS]:(state:RepoCommit[], action :Action<RepoCommit[]>) : RepoCommit[] =>{


            if(!!action.payload){

                return action.payload;
            }
            return state;
        }

    },
    [] as RepoCommit[]
)
