package com.webbfontaine.example.backendgithubrestapi.client.interceptor;

import com.webbfontaine.example.backendgithubrestapi.config.GitHubApiClientConfig;
import com.webbfontaine.example.backendgithubrestapi.config.SpringContextConfig;
import feign.RequestInterceptor;
import feign.RequestTemplate;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;

import java.util.Collections;
import java.util.HashMap;
/*feign:
  client:
    config:
      github-rest-api-client*/


@Slf4j
public class GithubClientInterceptor implements RequestInterceptor {

    private HashMap<String, String> headers;


    @Override
    public void apply(RequestTemplate requestTemplate) {

        //not ideal method of getting config (added since feign interceptors are not spring managed beans

        GitHubApiClientConfig springManagedService = SpringContextConfig.getBean(GitHubApiClientConfig.class);

        springManagedService.getHeaders().forEach(requestTemplate::header);

       // log.info("==");




    }
}
