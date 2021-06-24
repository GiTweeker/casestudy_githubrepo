package com.webbfontaine.example.backendgithubrestapi;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.webbfontaine.example.backendgithubrestapi.client.GithubClient;
import com.webbfontaine.example.backendgithubrestapi.pojo.commits.Committer;
import com.webbfontaine.example.backendgithubrestapi.pojo.commits.RepoCommits;
import com.webbfontaine.example.backendgithubrestapi.pojo.contributors.RepoContributor;
import com.webbfontaine.example.backendgithubrestapi.pojo.searchrepo.SearchRepoResponse;
import lombok.extern.slf4j.Slf4j;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.toList;
import static java.util.stream.Collectors.toMap;

@Slf4j
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc //need this in Spring Boot test
@RunWith(SpringRunner.class)
public class BackendGithubRestapiApplicationTests {

    @Autowired
    GithubClient githubClient;
    @Test
    @Ignore
    public void testSearchRepositories() throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();

        SearchRepoResponse searchRepoResponse = githubClient.searchRepositories("jquery in:readme",0,1);

        log.info(objectMapper.writeValueAsString(searchRepoResponse));

    }


    @Test
    @Ignore
    public void testRepoContributors() throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        List<RepoContributor> repoContributorList = githubClient
                .getContributorsToRepo("matscode","paystack",0,1);

        log.info(objectMapper.writeValueAsString(repoContributorList));

    }

    @Test
    public void testRepoCommits() throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        List<RepoCommits> repoCommitsResponse = githubClient
                .getCommitsToRepo("matscode","paystack",0,100,"s");

        log.info(objectMapper.writeValueAsString(repoCommitsResponse));

    }

    @Test
    public void testContributorsPerCommitCountFromFile() throws Exception{

        File file = ResourceUtils.getFile("classpath:contributors_commit_count.json");
        InputStream in = new FileInputStream(file);
        ObjectMapper mapper = new ObjectMapper();
        List<RepoCommits> committers = mapper.readValue(in, new TypeReference<List<RepoCommits>>(){});

        Map<Committer,Integer> pp =committers.stream().collect(
                Collectors.groupingBy(p -> p.getCommit().getCommitter().getEmail()))
                .entrySet().stream()
                .collect(Collectors.toMap(o -> o.getValue().stream().findFirst().get().getCommit().getCommitter(), stringListEntry -> stringListEntry.getValue().size()));

  /*      Set<Object> tt = committers.stream().collect(Collectors.groupingBy(p -> p.getCommit().getCommitter().getEmail())).values().stream()
                .map(plans -> plans.size())
                .collect(Collectors.toSet());*/
             /*   .values().stream()
                .map(plans -> plans.stream().findFirst().get())
                .collect(toList());*/

        log.info("==");
    }

}
