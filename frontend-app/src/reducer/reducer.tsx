import {combineReducers} from "redux";
import searchingRepositoryReducer from "../reducer/searchingRepositoryReducer";
import searchRepositoryFailureReducer from "../reducer/searchRepositoryFailureReducer";
import searchRepositoryReducer from "../reducer/searchRepositoryReducer";

import getRepositoryReducer from "../reducer/getRepositoryReducer";
import gettingRepositoryContributorsReducer from "../reducer/gettingRepositoryContributorsReducer";
import getRepositoryContributorsFailureReducer from "../reducer/getRepositoryContributorsFailureReducer";


import getRepositoryContributorsReducer from "../reducer/getRepositoryContributorsReducer";
import gettingRepositoryReducer from "../reducer/gettingRepositoryReducer";
import getRepositoryFailureReducer from "../reducer/getRepositoryFailureReducer";

import gettingRepositoryCommitsReducer from "./gettingRepositoryCommitsReducer";
import getRepositoryCommitsReducer from "./getRepositoryCommitsReducer";
import getRepositoryCommitsFailureReducer from "./getRepositoryCommitsFailureReducer";


import getRepositoryCommitsStatsReducer from "./getRepositoryCommitsStatsReducer";
import gettingRepositoryCommitsStatsReducer from "./gettingRepositoryCommitsStatsReducer";
import getRepositoryCommitsStatsFailureReducer from "./getRepositoryCommitsStatsFailureReducer";


const rootReducer = combineReducers({

    searchingRepository:searchingRepositoryReducer,
    repositorySearchResult:searchRepositoryReducer,
    repositorySearchResultError:searchRepositoryFailureReducer,

    gettingRepository:gettingRepositoryReducer,
    repository:getRepositoryReducer,
    getRepositoryError:getRepositoryFailureReducer,


    gettingRepositoryContributors:gettingRepositoryContributorsReducer,
    repositoryContributors:getRepositoryContributorsReducer,
    getRepositoryContributorsError:getRepositoryContributorsFailureReducer,


    gettingRepositoryCommits:gettingRepositoryCommitsReducer,
    repositoryCommits:getRepositoryCommitsReducer,
    gettingRepositoryCommitsError:getRepositoryCommitsFailureReducer,


    gettingRepositoryCommitsStats:gettingRepositoryCommitsStatsReducer,
    repositoryCommitsStats:getRepositoryCommitsStatsReducer,
    gettingRepositoryCommitsStatsError:getRepositoryCommitsStatsFailureReducer,

});

export default rootReducer;
