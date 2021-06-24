package com.webbfontaine.example.backendgithubrestapi.endpoint;

import com.webbfontaine.example.backendgithubrestapi.client.GithubClient;
import com.webbfontaine.example.backendgithubrestapi.pojo.RestResponsePojo;
import com.webbfontaine.example.backendgithubrestapi.pojo.commits.Committer;
import com.webbfontaine.example.backendgithubrestapi.pojo.commits.RepoCommits;
import com.webbfontaine.example.backendgithubrestapi.pojo.commitstats.RepCommitStats;
import com.webbfontaine.example.backendgithubrestapi.pojo.contributors.RepoContributor;
import com.webbfontaine.example.backendgithubrestapi.pojo.searchrepo.RepositoryItem;
import com.webbfontaine.example.backendgithubrestapi.pojo.searchrepo.SearchRepoResponse;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/github")
public class GithubRestApi {

    private GithubClient githubClient;

    public GithubRestApi(GithubClient githubClient) {
        this.githubClient = githubClient;
    }

    @Cacheable(value = "github_repo_search",key = "#query+'_'+#page+'_'+#perPage", unless = "#result != null")
    @GetMapping("/repo/search")
    public RestResponsePojo<SearchRepoResponse> searchRepos(
            @RequestParam(value = "q") String query,
            @RequestParam(required = false,value = "page") Integer page,
            @RequestParam(required = false,value = "per_page") Integer perPage
    ){
        RestResponsePojo<SearchRepoResponse> repoResponseRestResponsePojo = new RestResponsePojo<>();
        final  SearchRepoResponse searchRepoResponse = githubClient.searchRepositories(query,page,perPage);

        repoResponseRestResponsePojo.setData(searchRepoResponse);

        return repoResponseRestResponsePojo;
    }

    @Cacheable(value = "github_repo",key = "#owner+'_'+#repo", unless = "#result != null")
    @GetMapping("/repository/{owner}/{repo}")
    public RestResponsePojo<RepositoryItem> getRepoByAuthorNameAndRepoName(
            @PathVariable("owner") String owner,
            @PathVariable("repo") String repo
    ){
        RestResponsePojo<RepositoryItem> repoResponseRestResponsePojo = new RestResponsePojo<>();
        final RepositoryItem repositoryItem = githubClient.getRepoByAuthorNameAndRepoName(owner,repo);

        repoResponseRestResponsePojo.setData(repositoryItem);

        return repoResponseRestResponsePojo;
    }

    @Cacheable(value = "github_repo_contributors",key = "#owner+'_'+#repo+'_'+#page+'_'+#perPage", unless = "#result != null")
    @GetMapping("/repository/{owner}/{repo}/contributors")
    public RestResponsePojo<List<RepoContributor>> getRepositoryContributors(
            @PathVariable("owner") String owner,
            @PathVariable("repo") String repo,
            @RequestParam(required = false,value = "page") Integer page,
            @RequestParam(required = false,value = "per_page") Integer perPage
    ){
        RestResponsePojo<List<RepoContributor>> repoResponseRestResponsePojo = new RestResponsePojo<>();
        final List<RepoContributor> repoContributors = githubClient.getContributorsToRepo(owner,repo,page,perPage);

        repoResponseRestResponsePojo.setData(repoContributors);

        return repoResponseRestResponsePojo;
    }
    @Cacheable(value = "github_repo_contributors",key = "#owner+'_'+#repo+'_'+#page+'_'+#perPage", unless = "#result != null")
    @GetMapping("/repository/{owner}/{repo}/commits")
    public RestResponsePojo<List<RepoCommits>> getRepositoryCommits(
            @PathVariable("owner") String owner,
            @PathVariable("repo") String repo,
            @RequestParam(required = false,value = "page") Integer page,
            @RequestParam(required = false,value = "per_page") Integer perPage,
            @RequestParam(value = "q",required = false) String query
    ){
        RestResponsePojo<List<RepoCommits>> repoResponseRestResponsePojo = new RestResponsePojo<>();
        final  List<RepoCommits>  repoCommits = githubClient.getCommitsToRepo(owner,repo,page,perPage,query);

        repoResponseRestResponsePojo.setData(repoCommits);

        return repoResponseRestResponsePojo;
    }

    @Cacheable(value = "github_repo_contributors_stats",
            key = "#owner+'_'+#repo+'_'+#page+'_'+#perPage+'_'+#query", unless = "#result != null")
    @GetMapping("/repository/{owner}/{repo}/commits/stats")
    public RestResponsePojo<  List<RepCommitStats<Committer>>> getRepositoryCommitsStats(
            @PathVariable("owner") String owner,
            @PathVariable("repo") String repo,
            @RequestParam(required = false,value = "page") Integer page,
            @RequestParam(required = false,value = "per_page") Integer perPage,
            @RequestParam(value = "q",required = false) String query
    ){
        RestResponsePojo<  List<RepCommitStats<Committer>>> repoResponseRestResponsePojo = new RestResponsePojo<>();
        final  List<RepoCommits>  repoCommits = githubClient.getCommitsToRepo(owner,repo,page,perPage,query);

       /* Map<Committer,Integer> pp =repoCommits.stream().collect(
                Collectors.groupingBy(p -> p.getCommit().getCommitter().getEmail()))
                .entrySet().stream()
                .collect(Collectors.toMap(o -> o.getValue().stream().findFirst().get().getCommitter(),
                        stringListEntry -> stringListEntry.getValue().size()));*/

        List<RepCommitStats<Committer>> repCommitStats = new ArrayList<>();
        repoCommits.stream().collect(
                Collectors.groupingBy(p -> p.getCommit().getCommitter().getEmail())).forEach((s, repoCommits1) -> {
            RepCommitStats<Committer> rep = new RepCommitStats<>();
            rep.setKey(   repoCommits1.get(0).getCommit().getCommitter());
            rep.setCount(repoCommits1.size());
            repCommitStats.add(rep);

        });

     /*   final List<RepCommitStats> repCommitStats =  repoCommits.stream().collect(
                Collectors.groupingBy(p -> p.getCommit().getCommitter().getEmail()))
                .entrySet()
                .stream().map(stringListEntry -> new RepCommitStats<Committer>(
                        stringListEntry.getValue().get(0).getCommitter(),
                        stringListEntry.getValue().size())).collect(Collectors.toList());*/

   /*     List<String,List<RepoCommits>> pp  =repoCommits.stream().collect(
                Collectors.groupingBy(p -> p.getCommit().getCommitter().getEmail()))
                .entrySet().stream().collect(Collectors.toList());*/




        repoResponseRestResponsePojo.setData(repCommitStats);

        return repoResponseRestResponsePojo;
    }
}
