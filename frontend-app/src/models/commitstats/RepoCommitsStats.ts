export interface Key {
    date?: any;
    name?: any;
    email?: any;
    gists_url: string;
    repos_url: string;
    following_url: string;
    starred_url: string;
    login: string;
    followers_url: string;
    type: string;
    url: string;
    subscriptions_url: string;
    received_events_url: string;
    avatar_url: string;
    events_url: string;
    html_url: string;
    site_admin: boolean;
    id: number;
    gravatar_id: string;
    node_id: string;
    organizations_url: string;
}

export interface RepoCommitStat {
    key: Key;
    count: number;
}



