package com.webbfontaine.example.backendgithubrestapi.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.Map;

/*feign:
  client:
    config:
      github-rest-api-client:
        headers*/
@Configuration
@ConfigurationProperties("feign.client.config.github-rest-api-client")
@Data
public class GitHubApiClientConfig {

    Map<String,String> headers;
}
