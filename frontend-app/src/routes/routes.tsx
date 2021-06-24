import * as React from 'react';
import AppHome from "../container/AppHome";
import RepositoryDetail from "../container/RepositoryDetail";

export const routes = [
    {
        component: () => <AppHome/>,
        exact: true,
        path: "/"


    },
   /* {
        component: () => <RepositoryDetail/>,
        exact: true,
        path: "/repo/:owner/:repo"


    },*/
];
