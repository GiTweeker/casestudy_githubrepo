
import {AxiosResponse} from "axios";
// @ts-ignore
// import * as sample_total from "./../container/sample_total.json";
import axiosInstance from "./axiosinstance";
import {IRestResponse} from "../models/IRestResponse";
import {RepositoryItem, SearchRepoData} from "../models/searchrepo/SearchRepo";
import {RepoContributor} from "../models/repocontributors/RepoContributors";



const URL_SEARCH_REPOSITORIES = "/api/github/repo/search";
const GET_URL_GET_REPOSITORY = (owner:string,repo:string)=>{
    return `/api/github/repository/${owner}/${repo}`
};
const GET_URL_GET_REPOSITORY_CONTRIBUTORS = (owner:string,repo:string)=>{
    return `/api/github/repository/${owner}/${repo}/contributors`
};

const GET_URL_GET_REPOSITORY_COMMITS = (owner:string,repo:string)=>{
    return `/api/github/repository/${owner}/${repo}/commits`
};
const GET_URL_GET_REPOSITORY_COMMITS_STATS = (owner:string,repo:string,query?:string)=>{
    return `/api/github/repository/${owner}/${repo}/commits/stats?q=${query}`
};
// search repository
export function searchRepositoryApi(query:string, param?:{} ): Promise<AxiosResponse<IRestResponse<SearchRepoData>>> {
    return axiosInstance.get(`${URL_SEARCH_REPOSITORIES}?q=${query}`)
        .then(resp=>resp)
        .catch(err=>err);

}


// get repository by owner and repo
export function getRepositoryApi(owner:string, repo:string ): Promise<AxiosResponse<IRestResponse<RepositoryItem>>> {
    return axiosInstance.get(GET_URL_GET_REPOSITORY(owner,repo))
        .then(resp=>resp)
        .catch(err=>err);

}

// get repository contributors by owner and repo
export function getRepositoryContributorsApi(owner:string, repo:string ): Promise<AxiosResponse<IRestResponse<RepoContributor[]>>> {
    return axiosInstance.get(GET_URL_GET_REPOSITORY_CONTRIBUTORS(owner,repo))
        .then(resp=>resp)
        .catch(err=>err);

}

// get repository contributors by owner and repo
export function getRepositoryCommitsApi(owner:string, repo:string ): Promise<AxiosResponse<IRestResponse<RepoContributor[]>>> {
    return axiosInstance.get(GET_URL_GET_REPOSITORY_COMMITS(owner,repo))
        .then(resp=>resp)
        .catch(err=>err);

}



// get repository commits stats by owner and repo
export function getRepositoryCommitsStatsApi(owner:string, repo:string,query?:string ): Promise<AxiosResponse<IRestResponse<RepoContributor[]>>> {
    return axiosInstance.get(GET_URL_GET_REPOSITORY_COMMITS_STATS(owner,repo,query))
        .then(resp=>resp)
        .catch(err=>err);

}

