import {RepositoryItem, SearchRepoData} from "../models/searchrepo/SearchRepo";
import {RepoContributor} from "../models/repocontributors/RepoContributors";
import {RepoCommit} from "../models/repocommits/repocommits";
import {RepoCommitStat} from "../models/commitstats/RepoCommitsStats";

interface IInitialState {

    searchingRepository:boolean,
    repositorySearchResult:SearchRepoData,
    repositorySearchResultError:string,

    gettingRepository:boolean,
    repository:RepositoryItem,
    getRepositoryError:string,

    gettingRepositoryContributors:boolean,
    repositoryContributors:RepoContributor[],
    gettingRepositoryContributorsError:string,


    gettingRepositoryCommits:boolean,
    repositoryCommits:RepoCommit[],
    gettingRepositoryCommitsError:string,


    gettingRepositoryCommitsStats:boolean,
    repositoryCommitsStats:RepoCommitStat[],
    gettingRepositoryCommitsStatsError:string,
}

export default IInitialState;
