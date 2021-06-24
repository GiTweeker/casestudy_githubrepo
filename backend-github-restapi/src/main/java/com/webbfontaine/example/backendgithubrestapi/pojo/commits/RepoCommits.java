package com.webbfontaine.example.backendgithubrestapi.pojo.commits;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class RepoCommits{

	@JsonProperty("committer")
	private Committer committer;

	@JsonProperty("author")
	private Author author;

	@JsonProperty("html_url")
	private String htmlUrl;

	@JsonProperty("commit")
	private Commit commit;

	@JsonProperty("comments_url")
	private String commentsUrl;

	@JsonProperty("sha")
	private String sha;

	@JsonProperty("url")
	private String url;

	@JsonProperty("node_id")
	private String nodeId;

	@JsonProperty("parents")
	private List<ParentsItem> parents;
}