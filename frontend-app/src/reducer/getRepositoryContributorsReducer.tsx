import {Action, handleActions} from "redux-actions";
import {GET_REPOSITORY_CONTRIBUTORS_SUCCESS} from "../action/ActionTypes";
import {RepoContributor} from "../models/repocontributors/RepoContributors";


export default handleActions<RepoContributor[],RepoContributor[]>(
    {
        [GET_REPOSITORY_CONTRIBUTORS_SUCCESS]:(state:RepoContributor[],action :Action<RepoContributor[]>) : RepoContributor[] =>{


            if(!!action.payload){

                return action.payload;
            }
            return state;
        }

    },
    [] as RepoContributor[]
)
