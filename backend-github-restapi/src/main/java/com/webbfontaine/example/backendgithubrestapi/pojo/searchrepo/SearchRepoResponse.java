package com.webbfontaine.example.backendgithubrestapi.pojo.searchrepo;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class SearchRepoResponse {

	@JsonProperty("total_count")
	private Integer totalCount;

	@JsonProperty("incomplete_results")
	private Boolean incompleteResults;

	@JsonProperty("items")
	private List<RepositoryItem> items;
}