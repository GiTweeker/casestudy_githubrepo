import React from 'react';
import {Layout} from 'antd';

import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";

import ReposSearchBar from "../components/ReposSearchBar";
import IInitialState from "../state/InitialState";
import {Dispatch} from "redux";
import {MyActions} from "../action/Action";
import {RouteComponentProps, withRouter} from "react-router";
import {connect} from "react-redux";

const { Content } = Layout;

class RepositorySearch extends React.Component<RouteComponentProps, any>  {



  render(){

      return (

              <Content style={{ padding: '0 50px' }}>




                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>


                  <Row justify={'center'}  align={'middle'} style={{'height':'0%'}}>
                      <Col    sm={24} xs={24}   md={18} lg={8}  xl={8} xxl={8}>
                          <br/>
                          <ReposSearchBar/>
                      </Col>
                  </Row>
                  <br/>
                  <br/>
                  <br/>
                  <br/>


              </Content>

      );
  }

  componentDidMount(){

      console.log('sdsd');
      console.log(this.props.match.params);
  }
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
)(RepositorySearch)) ;
