import {Action, handleActions} from "redux-actions";
import {GET_REPOSITORY_COMMITS_STATS_SUCCESS,} from "../action/ActionTypes";
import {RepoCommitStat} from "../models/commitstats/RepoCommitsStats";


export default handleActions<RepoCommitStat[],RepoCommitStat[]>(
    {
        [GET_REPOSITORY_COMMITS_STATS_SUCCESS]:(state:RepoCommitStat[], action :Action<RepoCommitStat[]>) : RepoCommitStat[] =>{


            if(!!action.payload){

                return action.payload;
            }
            return state;
        }

    },
    [] as RepoCommitStat[]
)
