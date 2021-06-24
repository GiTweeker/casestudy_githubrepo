import React from "react";

import {Avatar, Timeline, Typography} from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import {CommitTimelineItem} from "../models/searchrepo/RepositoryCommitItem";

const { Text,Link } = Typography;

class CommitTimeline extends React.Component<{
    commits:CommitTimelineItem[]
}, any> {



    render(){
       const {commits} =  this.props;
        return (

            Array.isArray(commits) ?
                <Timeline mode="alternate">
                    { commits.map(commit => {

                            return (
                                <Timeline.Item color="red" dot={<Avatar alt={commit.committerName} key={commit.commitSha}
                                                                        src={commit.committerAvatarUrl} />}>
                                    <div className="ant-list-item-meta-content ant-list-item-meta-content-width100">
                                        <h4 className="ant-list-item-meta-title">
                                            <Link href={commit.committerUrl} target="_blank">
                                                &nbsp;{commit.committerFullName}/{commit.committerName}&nbsp;&nbsp;
                                            </Link>

                                        </h4>
                                        <div className="ant-list-item-meta-description">
                                            <p style={{marginBottom:'0.3em'}}>

                                                <Text>{commit.commitMessage}</Text>
                                            </p>

                                            <Text type="secondary">
                                                <ClockCircleOutlined />
                                                &nbsp;

                                                {commit.commitDate}
                                            </Text>

                                        </div>
                                    </div>
                                </Timeline.Item>
                            )
                        }
                    )
                    }

                </Timeline>
            : <> </>




        )
    }

}


export default CommitTimeline;


/*
*    <Timeline mode="alternate">
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo.
                </Timeline.Item>
                <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                    Technical testing 2015-09-01
                </Timeline.Item>
            </Timeline>
*
* */
