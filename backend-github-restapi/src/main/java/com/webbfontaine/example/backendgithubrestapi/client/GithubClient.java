package com.webbfontaine.example.backendgithubrestapi.client;


import com.webbfontaine.example.backendgithubrestapi.pojo.RestResponsePojo;
import com.webbfontaine.example.backendgithubrestapi.pojo.commits.RepoCommits;
import com.webbfontaine.example.backendgithubrestapi.pojo.contributors.RepoContributor;
import com.webbfontaine.example.backendgithubrestapi.pojo.searchrepo.RepositoryItem;
import com.webbfontaine.example.backendgithubrestapi.pojo.searchrepo.SearchRepoResponse;
import feign.Headers;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;
/*feign:
  client:
    config:
      github-rest-api-client*/
@FeignClient(name="github-rest-api-client",  url = "${core.integration.githhub.restapi.base-url:https://api.github.com}")
/*@Headers({"Accept:application/vnd.github.v3+json",
        "Authorisation:token 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"})*/

public interface GithubClient {
    @GetMapping("${core.integration.githhub.restapi.search-repositories}")
    SearchRepoResponse searchRepositories(

      @RequestParam(value = "q") String query,
      //page=2&per_page=2
      @RequestParam(required = false,value = "page") Integer page,
      @RequestParam(required = false,value = "per_page") Integer perPage


      );
    @GetMapping("${core.integration.githhub.restapi.contributors-repository}")
    List<RepoContributor> getContributorsToRepo(@PathVariable("owner") String owner, @PathVariable("repo") String repo,
                                                @RequestParam(required = false,value = "page") Integer page,
                                                @RequestParam(required = false,value = "per_page") Integer perPage);

    @GetMapping("${core.integration.githhub.restapi.repository}")
    RepositoryItem getRepoByAuthorNameAndRepoName(
            @PathVariable("owner") String owner,
            @PathVariable("repo") String repo
    );

    //epos/matscode/paystack/commits
    @GetMapping("${core.integration.githhub.restapi.commits-repository}")
    List<RepoCommits> getCommitsToRepo(@PathVariable("owner") String owner, @PathVariable("repo") String repo,
                                 @RequestParam(required = false,value = "page") Integer page,
                                 @RequestParam(required = false,value = "per_page") Integer perPage,
                                       @RequestParam(value = "q", required = false) String query
                                       );

}
