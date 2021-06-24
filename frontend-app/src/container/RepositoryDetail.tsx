import React from 'react';
import {Alert, Avatar, Button, Layout, Modal, notification, Result, Spin} from 'antd';


import IInitialState from "../state/InitialState";
import {Dispatch} from "redux";
import * as actions from "../action/Action";
import {MyActions} from "../action/Action";
import {RouteComponentProps, withRouter} from "react-router";
import {connect} from "react-redux";
import {RepositoryItem} from "../models/searchrepo/SearchRepo";

import {GithubOutlined} from '@ant-design/icons';
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import Divider from "antd/es/divider";

import CommitTimeline from "../components/CommitTimeline";
import {RepositoryContrubutors} from "../components/RepositoryContributors";
import {
    makeRepositoryContributorCommits,
    makeRepositoryContributorCommitsStats,
    makeRepositoryContributorItems
} from "../selectors/RepositorySelectors";
import {ListItemMetaProps} from "antd/lib/list";
import {CommitTimelineItem} from "../models/searchrepo/RepositoryCommitItem";
import RepoCommitsStats from "../components/RepoCommitsStats";
import {RepoCommitChartData} from "../models/RepoCommitChartData";
import ReposSearchBar from "../components/ReposSearchBar";

const {  Content } = Layout;

interface RepositoryDetailProps extends RouteComponentProps<{owner:string, repo:string}>{

    repository: RepositoryItem,
    gettingRepository: boolean,
    getRepositoryError:string,
    gettingRepositoryContributors?:boolean,
    repositoryContributors?:ListItemMetaProps[],
    gettingRepositoryContributorsError?:string,

    repositoryCommits: CommitTimelineItem[],
    gettingRepositoryCommits: boolean
    gettingRepositoryCommitsError?: string,


    repositoryCommitsStats:RepoCommitChartData[],
    gettingRepositoryCommitsStats: boolean,
    gettingRepositoryCommitsStatsError: string,

    getRepository: (owner: string, repo: string) => void;
    getRepositoryContributors: (owner: string, repo: string) => void;
    getRepositoryCommits: (owner: string, repo: string) => void;
    getRepositoryCommitsStats: (owner: string, repo: string,query:string,perPage:number) => void;

}

interface RepositoryDetailState {

    repository: RepositoryItem|null,
    gettingRepository: boolean,
    getRepositoryError:string,
    currentRepoOwner:string,
    statsPerPage:number,
    statsPerPageQualifier:string,
    currentRepo:string,
    gettingRepositoryContributors?:boolean,
    repositoryContributors?:ListItemMetaProps[],
    gettingRepositoryContributorsError?:string,

    repositoryCommits: CommitTimelineItem[],
    gettingRepositoryCommits: boolean
    gettingRepositoryCommitsError?: string,


    repositoryCommitsStats:RepoCommitChartData[],
    gettingRepositoryCommitsStats?: boolean,
    gettingRepositoryCommitsStatsError?: string,

    showSearchRepoModal:boolean

}

class RepositoryDetail extends React.Component<RepositoryDetailProps, RepositoryDetailState>  {

    public readonly state: RepositoryDetailState = {
        repository: null,
        gettingRepository: false,
        statsPerPage :100,
        getRepositoryError: "",
        statsPerPageQualifier:"sort:committer-date-desc",
        repositoryContributors:[] as ListItemMetaProps[],
        currentRepo:"",
        currentRepoOwner:"",
        repositoryCommits:[] as CommitTimelineItem[],
        gettingRepositoryCommits: false,
        repositoryCommitsStats:[] as RepoCommitChartData[],
        showSearchRepoModal:false

    };

    public clickSearchGithub = (e:any) => {
        e.preventDefault();

        this.setState(Object.assign(this.state, {
            showSearchRepoModal:true
        }));

    };






/*    constructor(props:RepositoryDetailProps){
        super(props);
    }*/


  render(){
        const {gettingRepository,repository,gettingRepositoryContributors,repositoryContributors,gettingRepositoryCommits
            ,gettingRepositoryContributorsError,repositoryCommits,repositoryCommitsStats,showSearchRepoModal} = this.state;
      return (

          <Content style={{ padding: '0 50px' }}>
              <Modal
                  title="Search Repository"
                  centered
                  visible={showSearchRepoModal}

                  width={500}
              >
                  <div>
                      <ReposSearchBar/>
                  </div>
              </Modal>

              <Spin tip="Loading..." size={'large'} spinning={gettingRepository}>
                  {
                      !!repository && !!repository.id
                          ?
                          (
                              <Content style={{ padding: '0 50px', minHeight:'100%' }}>



                                  <Result

                                     key={repository.id}
                                      icon={<GithubOutlined/>}
                                      status={"info"}
                                      title={repository.full_name}
                                      subTitle={repository.description}

                                      extra={[

                                          <Avatar size={'large'} src={repository.owner.avatar_url}  key={repository.id}/>,
                                          <br/>,
                                          <br/>,
                                          <Button type="primary" key="console" onClick={this.clickSearchGithub}>
                                              Click to Search
                                          </Button>



                                         /* <Button type="primary" key="console">
                                              Go Console
                                          </Button>,
                                          <Button key="buy">Buy Again</Button>,*/
                                      ]}
                                  />
                                  <div className="site-layout-content">


                                      <Row>

                                          <Col sm={6} xs={24}   md={24} lg={6}  xl={6} xxl={6}>
                                              {
                                                  !!repositoryContributors && repositoryContributors.length > 0  ? (
                                                      <Divider orientation="left">
                                                          <b>{repositoryContributors.length+" "} </b>Contributors </Divider>
                                                  ) : (<></>)
                                              }



                                              <RepositoryContrubutors
                                              gettingRepositoryContributors={gettingRepositoryContributors}
                                              gettingRepositoryContributorsError={gettingRepositoryContributorsError}
                                              repositoryContributors={repositoryContributors}

                                              />





                                          </Col>
                                          <Col sm={12}   xs={24}  md={24} lg={12}   xl={12} xxl={12}>
                                              <Divider orientation="center">
                                                  Commit Timeline
                                              </Divider>
                                              <Spin tip="Loading commits ..." spinning={gettingRepositoryCommits}>
                                                  {gettingRepositoryCommits ? <>
                                                      <br/>
                                                      <br/>
                                                      </> : <></>}
                                                  <CommitTimeline commits={repositoryCommits}/>
                                              </Spin>

                                          </Col>
                                          <Col sm={6}   xs={24}   md={24} lg={6}   xl={6}    xxl={6}>
                                              <Divider orientation="right">       Users per Commit (latest {this.state.statsPerPage})</Divider>
                                              <RepoCommitsStats data={repositoryCommitsStats}/>

                                          </Col>
                                      </Row>

                                  </div>

                              </Content>
                          )
                          : <><br/><br/>
                              {!!this.state.getRepositoryError ?

                                  (
                                      <Result

                                          key={"500"}
                                          extra={<Button type="primary">Reload</Button>}
                                          status="500"
                                          title="Repository Details Error"
                                          subTitle={this.state.getRepositoryError}
                                      />
                                  )

                              :(<></>)
                              }
                              <br/><br/></>
                  }

              </Spin>
          </Content>

      );
  }

    public componentWillReceiveProps(nextProps: Readonly<RepositoryDetailProps>, nextState: Readonly<RepositoryDetailState>) {
        const {repository,getRepositoryError,gettingRepository,
            gettingRepositoryContributors,repositoryContributors,
            repositoryCommits,gettingRepositoryCommits,
            repositoryCommitsStats,
            gettingRepositoryCommitsStats

        } = nextProps;
        /*console.log(nextProps.repositorySearchResult);
        console.log(nextProps.searchingRepository);*/
        // console.log(repositorySearchItems);
        // console.log(this.state);
        //repository
        if (repository !== null && !!repository.id) {


            if((!!this.state.repository && this.state.repository.id !== repository.id )|| !this.state.repository){
                this.setState(Object.assign(this.state, {
                    repository: {...repository}
                }));
                  this.props.getRepositoryContributors(this.state.currentRepoOwner,this.state.currentRepo);
                  this.props.getRepositoryCommits(this.state.currentRepoOwner,this.state.currentRepo);
                  this.props.getRepositoryCommitsStats(this.state.currentRepoOwner,this.state.currentRepo,
                      this.state.statsPerPageQualifier
                      ,this.state.statsPerPage);
            }


        }else{
            this.setState(Object.assign(this.state, {
                repository: null
            }));
        }
        if (gettingRepository !== null && gettingRepository !== this.state.gettingRepository) {


            this.setState(Object.assign(this.state, {
                gettingRepository
            }));
        }


        if (getRepositoryError !== null && getRepositoryError !== this.state.getRepositoryError) {

            notification.error({
                message: 'Repository Detail Error',
                description:getRepositoryError
                ,

            });
            this.setState(Object.assign(this.state, {
                getRepositoryError
            }));
        }

        //contributors

        if (repositoryContributors !== null) {

            if(!this.state.repositoryContributors){
                this.setState(Object.assign(this.state, {
                    repositoryContributors: repositoryContributors
                }));
            }else if(this.state.repositoryContributors !== repositoryContributors){
                this.setState(Object.assign(this.state, {
                    repositoryContributors: repositoryContributors
                }));
            }


        }else{
            this.setState(Object.assign(this.state, {
                repositoryContributors: []
            }));
        }
        if (gettingRepositoryContributors !== null && gettingRepositoryContributors !== this.state.gettingRepositoryContributors) {


            this.setState(Object.assign(this.state, {
                gettingRepositoryContributors
            }));
        }


        //commits

        if (repositoryCommits !== null) {

            if(!this.state.repositoryCommits){
                this.setState(Object.assign(this.state, {
                    repositoryCommits: repositoryCommits
                }));
            }else if(this.state.repositoryCommits !== repositoryCommits){
                this.setState(Object.assign(this.state, {
                    repositoryCommits: repositoryCommits
                }));
            }


        }else{
            this.setState(Object.assign(this.state, {
                repositoryCommits: []
            }));
        }
        if (gettingRepositoryCommits !== null && gettingRepositoryCommits !== this.state.gettingRepositoryCommits) {


            this.setState(Object.assign(this.state, {
                gettingRepositoryCommits
            }));
        }


        //commits stats

        if (repositoryCommitsStats !== null) {

            if(!this.state.repositoryCommitsStats){
                this.setState(Object.assign(this.state, {
                    repositoryCommitsStats
                }));
            }else if(this.state.repositoryCommitsStats !== repositoryCommitsStats){
                this.setState(Object.assign(this.state, {
                    repositoryCommitsStats
                }));
            }


        }else{
            this.setState(Object.assign(this.state, {
                repositoryCommitsStats: []
            }));
        }
        if (gettingRepositoryCommitsStats !== null && gettingRepositoryCommitsStats !== this.state.gettingRepositoryCommitsStats) {


            this.setState(Object.assign(this.state, {
                gettingRepositoryCommitsStats
            }));
        }
    }




  componentDidMount(){
      const {params} = this.props.match;
      const {owner,repo} = params;
      if(!owner || !repo){
          this.props.history.push("/");
          return;
      }

      this.setState(Object.assign(this.state, {
          currentRepoOwner: owner,
          currentRepo: repo,
          showSearchRepoModal:false
      }));
      this.props.getRepository(owner,repo);
      this.setState(Object.assign(this.state, {
          gettingRepositoryContributors:false,
          gettingRepositoryCommits:false,
          repositoryContributors:[],
          repositoryCommits:[]

      }));
      //TODO show empty page if no repo is found

      //TODO get repo details
      //get contributors
      //get timeline
      //get contributors count
      //console.log(this.props.match.params);
  }
}



const makeMapStateToProps = () => {

    return (state: IInitialState, props: any) => {
        return {
            repository: state.repository,
            gettingRepository: state.gettingRepository,
            getRepositoryError:state.getRepositoryError,
            gettingRepositoryContributors:state.gettingRepositoryContributors,
           // repositoryContributors:state.repositoryContributors,

            gettingRepositoryContributorsError:state.gettingRepositoryContributorsError,
            repositoryContributors:makeRepositoryContributorItems()(state,props),

            repositoryCommits: makeRepositoryContributorCommits()(state,props),
            gettingRepositoryCommits: state.gettingRepositoryCommits,
            gettingRepositoryCommitsError: state.gettingRepositoryCommitsError,


            repositoryCommitsStats:makeRepositoryContributorCommitsStats()(state,props),
            gettingRepositoryCommitsStats: state.gettingRepositoryCommitsStats,
            gettingRepositoryCommitsStatsError: state.gettingRepositoryCommitsStatsError,

        }
    };
};

const mapDispatchToProps = (dispatch: Dispatch<MyActions>) => (
    {

        getRepository: (owner: string, repo: string) => dispatch(actions.getRepository(owner, repo)),
        getRepositoryContributors: (owner: string, repo: string) => dispatch(actions.getRepositoryContributor(owner, repo)),
        getRepositoryCommits: (owner: string, repo: string) => dispatch(actions.getRepositoryCommits(owner, repo)),
        getRepositoryCommitsStats: (owner: string, repo: string,query:string,perPage:number) => dispatch(actions.getRepositoryCommitsStats(owner, repo,query,perPage)),
    }
);

const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any) => {
    return Object.assign({}, ownProps, stateProps, dispatchProps)
};

export default withRouter(connect(
    makeMapStateToProps,
    mapDispatchToProps,
    mergeProps
)(RepositoryDetail)) ;
