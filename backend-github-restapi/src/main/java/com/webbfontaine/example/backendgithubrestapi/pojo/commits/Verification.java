package com.webbfontaine.example.backendgithubrestapi.pojo.commits;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class Verification{

	@JsonProperty("reason")
	private String reason;

	@JsonProperty("signature")
	private Object signature;

	@JsonProperty("payload")
	private Object payload;

	@JsonProperty("verified")
	private Boolean verified;
}