package com.webbfontaine.example.backendgithubrestapi.pojo.searchrepo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class License{

	@JsonProperty("name")
	private String name;

	@JsonProperty("spdx_id")
	private String spdxId;

	@JsonProperty("key")
	private String key;

	@JsonProperty("url")
	private String url;

	@JsonProperty("node_id")
	private String nodeId;
}