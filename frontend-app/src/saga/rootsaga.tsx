import {all, call, put, takeEvery} from 'redux-saga/effects';

import * as Actions from '../action/ActionTypes'
import {AxiosResponse} from "axios";
import {IRestResponse} from "../models/IRestResponse";
import {RepositoryItem, SearchRepoData} from "../models/searchrepo/SearchRepo";

import {
    getRepositoryApi,
    getRepositoryCommitsApi, getRepositoryCommitsStatsApi,
    getRepositoryContributorsApi,
    searchRepositoryApi
} from "../apis/apis";

import {RepoContributor} from "../models/repocontributors/RepoContributors";
import {RepoCommitStat} from "../models/commitstats/RepoCommitsStats";
//import {delay} from "q";



/** get REPO contributors WORKER **/
function* getRepositoryConmmitsStatsWorker(action:any) {

    debugger;

    yield put({type:Actions.GET_REPOSITORY_COMMITS_STATS_FAILURE,payload:null});
    const {owner,repo,query} = action;

    yield put({type:Actions.GETTING_REPOSITORY_COMMITS_STATS,payload:true});

    //yield delay(3000);

    yield put({type: Actions.GET_REPOSITORY_COMMITS_STATS_SUCCESS, payload:{}});
    const resp: AxiosResponse<IRestResponse<RepoCommitStat[]>>  = yield call(getRepositoryCommitsStatsApi, owner,repo,query);

    if(!!resp) {
        debugger;
        yield put({type:Actions.GETTING_REPOSITORY_COMMITS_STATS,payload:false});

        const {status} = resp;
        if (status === 200) {
            // handle data
            const  { data } = resp;

            if(data.success){

                yield put({type: Actions.GET_REPOSITORY_COMMITS_STATS_SUCCESS, payload: data.data});

            }else{
                yield put({payload:data.message,type:Actions.GET_REPOSITORY_COMMITS_STATS_FAILURE});

            }


        }else{
            //resp.response.data

            yield put({payload:resp.statusText ? resp.statusText:   resp.request.response,type:Actions.GET_REPOSITORY_COMMITS_STATS_FAILURE});

        }


    }

}


/** get REPO contributors WORKER **/
function* getRepositoryConmmitsWorker(action:any) {

    debugger;

    yield put({type:Actions.GET_REPOSITORY_COMMITS_FAILURE,payload:null});
    const {owner,repo} = action;

    yield put({type:Actions.GETTING_REPOSITORY_COMMITS,payload:true});

    //yield delay(3000);

    yield put({type: Actions.GET_REPOSITORY_COMMITS_SUCCESS, payload:{}});
    const resp: AxiosResponse<IRestResponse<RepoContributor[]>>  = yield call(getRepositoryCommitsApi, owner,repo);

    if(!!resp) {
        debugger;
        yield put({type:Actions.GETTING_REPOSITORY_COMMITS,payload:false});

        const {status} = resp;
        if (status === 200) {
            // handle data
            const  { data } = resp;

            if(data.success){

                yield put({type: Actions.GET_REPOSITORY_COMMITS_SUCCESS, payload: data.data});

            }else{
                yield put({payload:data.message,type:Actions.GET_REPOSITORY_COMMITS_FAILURE});

            }


        }else{
            //resp.response.data

            yield put({payload:resp.statusText ? resp.statusText:   resp.request.response,type:Actions.GET_REPOSITORY_COMMITS_FAILURE});

        }


    }

}


/** get REPO contributors WORKER **/
function* getRepositoryContributorsWorker(action:any) {

    debugger;

    yield put({type:Actions.GET_REPOSITORY_CONTRIBUTORS_FAILURE,payload:null});
    const {owner,repo} = action;

    yield put({type:Actions.GETTING_REPOSITORY_CONTRIBUTORS,payload:true});

   // yield delay(3000);

    yield put({type: Actions.GET_REPOSITORY_CONTRIBUTORS_SUCCESS, payload:{}});
    const resp: AxiosResponse<IRestResponse<RepoContributor[]>>  = yield call(getRepositoryContributorsApi, owner,repo);

    debugger;
    if(!!resp) {
        debugger;
        yield put({type:Actions.GETTING_REPOSITORY_CONTRIBUTORS,payload:false});

        const {status} = resp;
        if (status === 200) {
            // handle data
            const  { data } = resp;

            if(data.success){

                yield put({type: Actions.GET_REPOSITORY_CONTRIBUTORS_SUCCESS, payload: data.data});

            }else{
                yield put({payload:data.message,type:Actions.GET_REPOSITORY_CONTRIBUTORS_FAILURE});

            }


        }else{
            //resp.response.data

            yield put({payload:resp.statusText ? resp.statusText:   resp.request.response,type:Actions.GET_REPOSITORY_CONTRIBUTORS_FAILURE});

        }


    }

}


/** get REPO WORKER **/
function* getRepositoryWorker(action:any) {

    debugger;

    yield put({type:Actions.GET_REPOSITORY_FAILURE,payload:null});
    const {owner,repo} = action;

    yield put({type:Actions.GETTING_REPOSITORY,payload:true});

    yield put({type: Actions.GET_REPOSITORY_SUCCESS, payload:{}});
    const resp: AxiosResponse<IRestResponse<RepositoryItem>>  = yield call(getRepositoryApi, owner,repo);


    if(!!resp) {
        yield put({type:Actions.GETTING_REPOSITORY,payload:false});

        const {status} = resp;
        if (status === 200) {
            // handle data
            const  { data } = resp;

            if(data.success){

                yield put({type: Actions.GET_REPOSITORY_SUCCESS, payload: data.data});

            }else{
                yield put({payload:data.message,type:Actions.GET_REPOSITORY_FAILURE});

            }


        }else{
          //resp.response.data

            yield put({payload:resp.statusText ? resp.statusText:   resp.request.response,type:Actions.GET_REPOSITORY_FAILURE});

        }


    }

}


/** SEARCH REPO WORKER **/
function* searchRepositoryWorker(action:any) {

    yield put({type:Actions.SEARCH_REPOSITORY_FAILURE,payload:null});
    const {query,params} = action;

    yield put({type:Actions.SEARCHING_REPOSITORY,payload:true});

    yield put({type: Actions.SEARCH_REPOSITORY_SUCCESS, payload:{items:[]}});
    const resp: AxiosResponse<IRestResponse<SearchRepoData>>  = yield call(searchRepositoryApi, query,params);


    if(!!resp) {
        yield put({type:Actions.SEARCHING_REPOSITORY,payload:false});

        const {status} = resp;
        if (status === 200) {
            // handle data
            const  { data } = resp;

            if(data.success){

                yield put({type: Actions.SEARCH_REPOSITORY_SUCCESS, payload: data.data});

            }else{
                yield put({payload:data.message,type:Actions.SEARCH_REPOSITORY_FAILURE});

            }


        }else{
            debugger;
            // NO RESPONSE FROM SERVER
            yield put({payload:resp.statusText,type:Actions.SEARCH_REPOSITORY_FAILURE});

        }


    }

}

export function* getRepositoryContributorsWatcher() {
    yield takeEvery(Actions.GET_REPOSITORY_CONTRIBUTORS, getRepositoryContributorsWorker);
}
export function* searchRepositoryWatcher() {
    yield takeEvery(Actions.SEARCH_REPOSITORY, searchRepositoryWorker);
}
export function* getRepositoryWatcher() {
    yield takeEvery(Actions.GET_REPOSITORY, getRepositoryWorker);
}
export function* getRepositoryCommitsWatcher() {
    yield takeEvery(Actions.GET_REPOSITORY_COMMITS, getRepositoryConmmitsWorker);
}
export function* getRepositoryCommitsStatsWatcher() {
    yield takeEvery(Actions.GET_REPOSITORY_COMMITS_STATS, getRepositoryConmmitsStatsWorker);
}

export default function* rootSaga () {
    yield all([
        searchRepositoryWatcher(),
        getRepositoryWatcher(),
        getRepositoryContributorsWatcher(),
        getRepositoryCommitsWatcher(),
        getRepositoryCommitsStatsWatcher()


    ])
}
