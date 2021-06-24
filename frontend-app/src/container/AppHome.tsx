import React from 'react';
import {Layout, Menu} from 'antd';
import IInitialState from "../state/InitialState";
import {Dispatch} from "redux";
import {MyActions} from "../action/Action";
import {Route, RouteComponentProps, Switch, withRouter} from "react-router";
import {connect} from "react-redux";
import RepositorySearch from "./RepositorySearch";
import RepositoryDetail from "./RepositoryDetail";
/*import logo from './logo.svg';*/

const { Header } = Layout;


class AppHome extends React.Component<RouteComponentProps, any>  {

  /*  constructor(props:RouteComponentProps){
        super(props);
    }*/
    handleMenuItemClick = (e:any) => {
        //console.log('click ', e);
      //  this.setState({ current: e.key });

        this.props.history.push("/")
    };

  render(){
        const {path}  = this.props.match;
      return (
          <Layout className="layout">
              <Header>
                  <div className="logo" />
                  <Menu theme="dark" mode="horizontal"  selectedKeys={["1"]}  onClick={this.handleMenuItemClick}>


                       <Menu.Item key={1} >{`Search Github`}</Menu.Item>

                  </Menu>
              </Header>
            <div>



                <Switch>
                    <Route exact  path={`${path}repo/:owner/:repo`}
                           >
                       <RepositoryDetail/>
                    </Route>
                    <Route  exact path={path}
                            render={(props) => <RepositorySearch {...this.props}/>}
                    >
                    </Route>
                    <Route component={Error} key={"error"} />
                </Switch>


            </div>
              <br/>
              <br/>
              <br/>


          </Layout>
      );
  }

  componentDidMount(){

      console.log(this.props.match.path);
      console.log(this.props.match.params);
  }
}

function Error() {
    return (
        <div>
            Error Page
        </div>
    );
}

const makeMapStateToProps = () => {

    return (state: IInitialState, props: any) => {
        return {

        }
    };
};

const mapDispatchToProps = (dispatch: Dispatch<MyActions>) => (
    {


    }
);

const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any) => {
    return Object.assign({}, ownProps, stateProps, dispatchProps)
};

export default withRouter(connect(
    makeMapStateToProps,
    mapDispatchToProps,
    mergeProps
)(AppHome)) ;
