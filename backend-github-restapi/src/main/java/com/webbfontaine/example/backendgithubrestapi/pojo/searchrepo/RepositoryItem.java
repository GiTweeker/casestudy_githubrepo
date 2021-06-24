package com.webbfontaine.example.backendgithubrestapi.pojo.searchrepo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class RepositoryItem {

	@JsonProperty("stargazers_count")
	private Integer stargazersCount;

	@JsonProperty("pushed_at")
	private String pushedAt;

	@JsonProperty("subscription_url")
	private String subscriptionUrl;

	@JsonProperty("language")
	private String language;

	@JsonProperty("branches_url")
	private String branchesUrl;

	@JsonProperty("issue_comment_url")
	private String issueCommentUrl;

	@JsonProperty("labels_url")
	private String labelsUrl;

	@JsonProperty("score")
	private Double score;

	@JsonProperty("subscribers_url")
	private String subscribersUrl;

	@JsonProperty("releases_url")
	private String releasesUrl;

	@JsonProperty("svn_url")
	private String svnUrl;

	@JsonProperty("id")
	private Integer id;

	@JsonProperty("forks")
	private Integer forks;

	@JsonProperty("archive_url")
	private String archiveUrl;

	@JsonProperty("git_refs_url")
	private String gitRefsUrl;

	@JsonProperty("forks_url")
	private String forksUrl;

	@JsonProperty("statuses_url")
	private String statusesUrl;

	@JsonProperty("ssh_url")
	private String sshUrl;

	@JsonProperty("license")
	private License license;

	@JsonProperty("full_name")
	private String fullName;

	@JsonProperty("size")
	private Integer size;

	@JsonProperty("languages_url")
	private String languagesUrl;

	@JsonProperty("html_url")
	private String htmlUrl;

	@JsonProperty("collaborators_url")
	private String collaboratorsUrl;

	@JsonProperty("clone_url")
	private String cloneUrl;

	@JsonProperty("name")
	private String name;

	@JsonProperty("pulls_url")
	private String pullsUrl;

	@JsonProperty("default_branch")
	private String defaultBranch;

	@JsonProperty("hooks_url")
	private String hooksUrl;

	@JsonProperty("trees_url")
	private String treesUrl;

	@JsonProperty("tags_url")
	private String tagsUrl;

	@JsonProperty("private")
	private Boolean jsonMemberPrivate;

	@JsonProperty("contributors_url")
	private String contributorsUrl;

	@JsonProperty("has_downloads")
	private Boolean hasDownloads;

	@JsonProperty("notifications_url")
	private String notificationsUrl;

	@JsonProperty("open_issues_count")
	private Integer openIssuesCount;

	@JsonProperty("description")
	private String description;

	@JsonProperty("created_at")
	private String createdAt;

	@JsonProperty("watchers")
	private Integer watchers;

	@JsonProperty("keys_url")
	private String keysUrl;

	@JsonProperty("deployments_url")
	private String deploymentsUrl;

	@JsonProperty("has_projects")
	private Boolean hasProjects;

	@JsonProperty("archived")
	private Boolean archived;

	@JsonProperty("has_wiki")
	private Boolean hasWiki;

	@JsonProperty("updated_at")
	private String updatedAt;

	@JsonProperty("comments_url")
	private String commentsUrl;

	@JsonProperty("stargazers_url")
	private String stargazersUrl;

	@JsonProperty("disabled")
	private Boolean disabled;

	@JsonProperty("git_url")
	private String gitUrl;

	@JsonProperty("has_pages")
	private Boolean hasPages;

	@JsonProperty("owner")
	private Owner owner;

	@JsonProperty("commits_url")
	private String commitsUrl;

	@JsonProperty("compare_url")
	private String compareUrl;

	@JsonProperty("git_commits_url")
	private String gitCommitsUrl;

	@JsonProperty("blobs_url")
	private String blobsUrl;

	@JsonProperty("git_tags_url")
	private String gitTagsUrl;

	@JsonProperty("merges_url")
	private String mergesUrl;

	@JsonProperty("downloads_url")
	private String downloadsUrl;

	@JsonProperty("has_issues")
	private Boolean hasIssues;

	@JsonProperty("url")
	private String url;

	@JsonProperty("contents_url")
	private String contentsUrl;

	@JsonProperty("mirror_url")
	private Object mirrorUrl;

	@JsonProperty("milestones_url")
	private String milestonesUrl;

	@JsonProperty("teams_url")
	private String teamsUrl;

	@JsonProperty("fork")
	private Boolean fork;

	@JsonProperty("issues_url")
	private String issuesUrl;

	@JsonProperty("events_url")
	private String eventsUrl;

	@JsonProperty("issue_events_url")
	private String issueEventsUrl;

	@JsonProperty("assignees_url")
	private String assigneesUrl;

	@JsonProperty("open_issues")
	private Integer openIssues;

	@JsonProperty("watchers_count")
	private Integer watchersCount;

	@JsonProperty("node_id")
	private String nodeId;

	@JsonProperty("homepage")
	private String homepage;

	@JsonProperty("forks_count")
	private Integer forksCount;
}