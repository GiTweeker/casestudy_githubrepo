import React from "react";
import {List, Skeleton} from 'antd';
import Avatar from "antd/es/avatar/avatar";
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import Divider from "antd/es/divider";
import CommitTimeline from "./CommitTimeline";
import {RepositoryItem} from "../models/searchrepo/SearchRepo";
import {RepoContributor} from "../models/repocontributors/RepoContributors";

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

interface RepositoryInformationProps{
    repository?: RepositoryItem,
    repositoryContributors?: RepoContributor[],
    gettingRepositoryContributors: boolean,
    gettingRepositoryContributorsError: String,



}
class RepositoryInformation extends React.Component<RepositoryInformationProps, any> {

    render(){

        return  (



            <Row>

                <Col sm={6} xs={24}   md={24} lg={6}  xl={6} xxl={6}>
                    <Divider orientation="left">Committers</Divider>


                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <Skeleton loading={true}  active avatar>
                                    <List.Item.Meta
                                        avatar={<Avatar src="https://avatars.githubusercontent.com/u/8417404?v=4" />}
                                        title={<a href="https://ant.design">{item.title}</a>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                    </Skeleton>
                                </List.Item>
                            )}
                        />



                </Col>
                <Col sm={12}   xs={24}  md={24} lg={12}   xl={12} xxl={12}>
                    <Divider orientation="center">
                        Commit Timeline
                    </Divider>
                    <CommitTimeline commits={[]}/>
                </Col>
                <Col sm={6}   xs={24}   md={24} lg={6}   xl={6}    xxl={6}>
                    <Divider orientation="right">       Users per Commit</Divider>

                </Col>
            </Row>


        )
    }

}


export default RepositoryInformation;
