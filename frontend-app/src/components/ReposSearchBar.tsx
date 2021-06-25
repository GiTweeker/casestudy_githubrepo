import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import IInitialState from "../state/InitialState";
import * as actions from '../action/Action';
import {MyActions} from '../action/Action';
import {AutoComplete, Avatar, Comment, Input, notification, Tooltip} from "antd";
import {Owner, SearchRepoData} from "../models/searchrepo/SearchRepo";
import {makeRepositorySearchResultItem} from "../selectors/RepositorySelectors";
import {RouteComponentProps, withRouter} from "react-router";

interface ReposSearchBarState {
    repositorySearchResult: SearchRepoData,
    searchingRepository: boolean,
    repositorySearchItems: repositorySearchType[],
    showEnterButton:boolean

}

type repositorySearchType = {
    fullName: string,
    name: string,
    owner: Owner,
    url: string,
    id: number,
    forksCount: number,
    stargazersCount: number
}

interface ReposSearchBarProps  extends RouteComponentProps{
    searchRepository: (query: string, params?: {}) => void;
    repositorySearchResult: SearchRepoData,
    searchingRepository: boolean,
    onSelectRepo?: (owner:string,repo:string)=>void,
    repositorySearchItems: repositorySearchType[]

}

function getRepoSearchItem(repo: repositorySearchType) {

    return (
        <div>
            <Comment

                author={<span>    {repo.name}</span>}
                avatar={
                    <Avatar
                        src={repo.owner.avatar_url}
                        alt={repo.owner.login}
                    />
                }
                content={
                    <p>
                        {repo.fullName}

                    </p>
                }
                datetime={
                    <Tooltip title={repo.fullName}>
                        <span>{repo.stargazersCount + ' Stars '}</span>
                    </Tooltip>
                }
            />
            {/*       <Divider />*/}

        </div>
    )

}

class ReposSearchBar extends React.Component<ReposSearchBarProps, ReposSearchBarState> {

    public readonly state: ReposSearchBarState = {
        repositorySearchResult: {},
        searchingRepository: false,
        repositorySearchItems: [],
        showEnterButton:false

    };

 /*   constructor(props:ReposSearchBarProps){
        super(props);
    }*/


    public handleSearch = (value: string) => {

        // console.log("search value "+value );
        // this.props.searchRepository("jquery");

        const hasValidSearchInput  =  !!value && value.length > 3;

        this.setState(Object.assign(this.state, {
            showEnterButton: hasValidSearchInput
        }));
        if (hasValidSearchInput) {
            this.props.searchRepository(value);
            return;
        }

        this.setState(Object.assign(this.state, {
            repositorySearchItems: []
        }));

    };

    public onSelect = (value: string,option:any) => {
        const {repo}  = option;

        if(!!repo && !!repo.owner && !!repo.owner.login && !!repo.name){
            if(!!this.props.onSelectRepo){
                this.props.onSelectRepo(repo.owner,repo.name);
            }
            this.props.history.push(`/repo/${repo.owner.login}/${repo.name}`);

        }else{
            notification.error({
                message: 'Github Search',
                description:
                    'Unable to redirect to repo detail page.',
            })

        }

    };


    render() {

        const {repositorySearchItems, searchingRepository,showEnterButton} = this.state;
        return (
            <AutoComplete
                dropdownMatchSelectWidth={252}
                style={{width: '100%'}}


                options={

                    repositorySearchItems.map(repo => {

                        return {value: repo.name, label: getRepoSearchItem(repo), repo,key:repo.id}
                    })


                }
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
            >
                <Input.Search size="large"
                              placeholder="type over 3 characters to search by description, author name, repository name"
                              loading={searchingRepository} enterButton={showEnterButton}/>


            </AutoComplete>
        )
    }

    componentDidMount() {


    }

    public componentWillReceiveProps(nextProps: Readonly<ReposSearchBarProps>, nextState: Readonly<ReposSearchBarState>) {
        const {repositorySearchItems, searchingRepository} = nextProps;
        /*console.log(nextProps.repositorySearchResult);
        console.log(nextProps.searchingRepository);*/
        // console.log(repositorySearchItems);
        // console.log(this.state);
        if (repositorySearchItems !== null &&
            Array.isArray(repositorySearchItems)) {


            this.setState(Object.assign(this.state, {
                repositorySearchItems: [...repositorySearchItems]
            }));
        }

        if (searchingRepository !== null && searchingRepository !== this.state.searchingRepository) {


            this.setState(Object.assign(this.state, {
                searchingRepository
            }));
        }

    }

}

const makeMapStateToProps = () => {

    return (state: IInitialState, props: any) => {
        return {
            repositorySearchResult: state.repositorySearchResult,
            searchingRepository: state.searchingRepository,
            repositorySearchItems: makeRepositorySearchResultItem()(state, props)
        }
    };
};

const mapDispatchToProps = (dispatch: Dispatch<MyActions>) => (
    {
        searchRepository: (query: string, params: any) => dispatch(actions.searchRepository(query, params)),

    }
);

const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any) => {
    return Object.assign({}, ownProps, stateProps, dispatchProps)
};

export default withRouter(connect(
    makeMapStateToProps,
    mapDispatchToProps,
    mergeProps
)(ReposSearchBar));


