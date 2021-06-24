import {ListItemMetaProps} from "antd/lib/list";
import {List, Skeleton} from "antd";
import InfiniteScroll from 'react-infinite-scroller';
import React from "react";

function handleInfiniteOnLoad() {


}

export const RepositoryContrubutors:  React.FunctionComponent <{
    repositoryContributors?: ListItemMetaProps[],
    gettingRepositoryContributors?: boolean,
    gettingRepositoryContributorsError?: String,

}> = ({repositoryContributors,gettingRepositoryContributors,gettingRepositoryContributorsError}) => {


    return (
        <>
            <div className="demo-infinite-container">
                <InfiniteScroll
                    initialLoad={false}
                    loadMore={handleInfiniteOnLoad}
                    pageStart={0}
                    hasMore={false}
                    useWindow={false}
                >
                    <Skeleton loading={gettingRepositoryContributors}  active avatar >
                    <List

                        itemLayout="horizontal"
                        dataSource={repositoryContributors}
                        renderItem={(repositoryContributorItem:ListItemMetaProps) => (
                            <List.Item>

                                    <List.Item.Meta
                                        avatar={repositoryContributorItem.avatar}
                                        title={<a href="https://ant.design">{repositoryContributorItem.title}</a>}
                                        description={repositoryContributorItem.description}
                                    />

                            </List.Item>
                        )}
                    />
                    </Skeleton>
                </InfiniteScroll>
            </div>


        </>
    )



}
