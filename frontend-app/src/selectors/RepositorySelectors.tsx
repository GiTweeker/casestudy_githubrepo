import {createSelector} from "reselect";
import IInitialState from "../state/InitialState";
import * as React from "react";
import {Avatar} from "antd";
const repositoryResult = (state:IInitialState, props:any) => Array.isArray(state.repositorySearchResult.items) ? state.repositorySearchResult.items:[];
const repositoryContributorResult = (state:IInitialState, props:any) => Array.isArray(state.repositoryContributors) ? state.repositoryContributors:[];
const repositoryContributorCommits = (state:IInitialState, props:any) => Array.isArray(state.repositoryCommits) ? state.repositoryCommits:[];
const repositoryContributorCommitsStats = (state:IInitialState, props:any) => Array.isArray(state.repositoryCommitsStats) ? state.repositoryCommitsStats:[];
export const makeRepositorySearchResultItem = ()=> {


    return createSelector(
        [ repositoryResult ],
        (repositories) => {

            return   repositories.map(repository =>
                Object.assign({},
                    {},
                    {
                        fullName :repository.full_name,
                        name :repository.name,
                        owner:repository.owner,
                        id:repository.id,
                        url:repository.url,
                        forksCount: repository.forks_count,
                        stargazersCount: repository.stargazers_count
                    }
                ))

        }
    );
};


export const makeRepositoryContributorItems = ()=> {


    return createSelector(
        [ repositoryContributorResult ],
        (contributors) => {

            return   contributors.map(contributor =>
                Object.assign({},
                    {},
                    {
                        avatar: <Avatar alt={contributor.login} src={contributor.avatar_url}/>,
                        title: contributor.login,
                        description: `${contributor.login}\\${contributor.type}`

                    }
                ))

        }
    );
};


export const makeRepositoryContributorCommits = ()=> {


    return createSelector(
        [ repositoryContributorCommits ],
        (commits) => {

            return   commits.map(commit =>
                Object.assign({},
                    {},
                    {
                        committerName: commit.committer?.login,
                        commitSha:commit.sha,
                        key:commit.sha,
                        committerId:commit.committer?.id,
                        committerFullName:commit.commit?.committer?.name,
                        committerAvatarUrl:commit.committer?.avatar_url,
                        committerUrl:commit.committer?.url,
                        commitMessage:commit.commit?.message,
                        commitDate:commit.commit.committer?.date,
                    }


                ))

        }
    );
};

export const makeRepositoryContributorCommitsStats = ()=> {


    return createSelector(
        [ repositoryContributorCommitsStats ],
        (commitsStats) => {

            return   commitsStats.map(commitStat =>
                Object.assign({},
                    {},
                    {
                        type:commitStat.key?.name , value:commitStat.count
                    }


                ))

        }
    );
};
