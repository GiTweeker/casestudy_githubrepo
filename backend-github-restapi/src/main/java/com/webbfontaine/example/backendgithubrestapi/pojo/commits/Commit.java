package com.webbfontaine.example.backendgithubrestapi.pojo.commits;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class Commit{

	@JsonProperty("comment_count")
	private Integer commentCount;

	@JsonProperty("committer")
	private Committer committer;

	@JsonProperty("author")
	private Author author;

	@JsonProperty("tree")
	private Tree tree;

	@JsonProperty("message")
	private String message;

	@JsonProperty("url")
	private String url;

	@JsonProperty("verification")
	private Verification verification;
}