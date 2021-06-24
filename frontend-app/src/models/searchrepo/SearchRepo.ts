

    export interface License {
        name: string;
        spdx_id: string;
        key: string;
        url: string;
        node_id: string;
    }

    export interface Owner {
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

    export interface RepositoryItem {
        stargazers_count: number;
        pushed_at: Date;
        subscription_url: string;
        language: string;
        branches_url: string;
        issue_comment_url: string;
        labels_url: string;
        score: number;
        subscribers_url: string;
        releases_url: string;
        svn_url: string;
        id: number;
        forks: number;
        archive_url: string;
        git_refs_url: string;
        forks_url: string;
        statuses_url: string;
        ssh_url: string;
        license: License;
        full_name: string;
        size: number;
        languages_url: string;
        html_url: string;
        collaborators_url: string;
        clone_url: string;
        name: string;
        pulls_url: string;
        default_branch: string;
        hooks_url: string;
        trees_url: string;
        tags_url: string;
        private: boolean;
        contributors_url: string;
        has_downloads: boolean;
        notifications_url: string;
        open_issues_count: number;
        description: string;
        created_at: Date;
        watchers: number;
        keys_url: string;
        deployments_url: string;
        has_projects: boolean;
        archived: boolean;
        has_wiki: boolean;
        updated_at: Date;
        comments_url: string;
        stargazers_url: string;
        disabled: boolean;
        git_url: string;
        has_pages: boolean;
        owner: Owner;
        commits_url: string;
        compare_url: string;
        git_commits_url: string;
        blobs_url: string;
        git_tags_url: string;
        merges_url: string;
        downloads_url: string;
        has_issues: boolean;
        url: string;
        contents_url: string;
        mirror_url?: any;
        milestones_url: string;
        teams_url: string;
        fork: boolean;
        issues_url: string;
        events_url: string;
        issue_events_url: string;
        assignees_url: string;
        open_issues: number;
        watchers_count: number;
        node_id: string;
        homepage: string;
        forks_count: number;
    }

    export interface SearchRepoData {
        total_count?: number;
        incomplete_results?: boolean;
        items?: RepositoryItem[];
    }





