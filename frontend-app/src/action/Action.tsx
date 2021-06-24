
import {
    GET_REPOSITORY, GET_REPOSITORY_COMMITS, GET_REPOSITORY_COMMITS_STATS,
    GET_REPOSITORY_CONTRIBUTORS, SEARCH_REPOSITORY,

} from "./ActionTypes";

/*
* SEARCH REPOSITORY
* */
export interface ISEARCHREPOSITORY {
    query : string,
    params? : {},
    type :SEARCH_REPOSITORY
}

export function searchRepository(query:string,params:{}) :ISEARCHREPOSITORY{
    return {
        query,
        params,
        type : SEARCH_REPOSITORY,

    }
}


/*
* GET REPOSITORY
* */
export interface IGETEPOSITORY {
    owner : string,
    repo : string,
    type :GET_REPOSITORY
}

export function getRepository(owner:string,repo:string) :IGETEPOSITORY{
    return {
        owner,
        repo,
        type : GET_REPOSITORY,

    }
}


/*
* GET REPOSITORY
* */
export interface IGETEPOSITORYCONTRIBUTORS {
    owner : string,
    repo : string,
    type :GET_REPOSITORY_CONTRIBUTORS
}

export function getRepositoryContributor(owner:string,repo:string) :IGETEPOSITORYCONTRIBUTORS{
    return {
        owner,
        repo,
        type : GET_REPOSITORY_CONTRIBUTORS,

    }
}


/*
* GET REPOSITORY COMMITS
* */
export interface IGETEPOSITORYCOMMITS {
    owner : string,
    repo : string,
    type :GET_REPOSITORY_COMMITS
}

export function getRepositoryCommits(owner:string,repo:string) :IGETEPOSITORYCOMMITS{
    return {
        owner,
        repo,
        type : GET_REPOSITORY_COMMITS,

    }
}


/*
* GET REPOSITORY COMMITS STATS
* */
export interface IGETEPOSITORYCOMMITSSTATS {
    owner : string,
    repo : string,
    query?:string,
    perPage:number,
    type :GET_REPOSITORY_COMMITS_STATS
}

export function getRepositoryCommitsStats(owner:string,repo:string,query:string,perPage:number) :IGETEPOSITORYCOMMITSSTATS{
    return {
        owner,
        repo,
        query,
        perPage,
        type : GET_REPOSITORY_COMMITS_STATS,

    }
}





export type MyActions  = ISEARCHREPOSITORY|IGETEPOSITORY|IGETEPOSITORYCONTRIBUTORS|IGETEPOSITORYCOMMITS|IGETEPOSITORYCOMMITSSTATS;
