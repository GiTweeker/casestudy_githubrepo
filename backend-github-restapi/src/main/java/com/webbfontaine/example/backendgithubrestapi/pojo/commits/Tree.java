package com.webbfontaine.example.backendgithubrestapi.pojo.commits;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class Tree{

	@JsonProperty("sha")
	private String sha;

	@JsonProperty("url")
	private String url;
}