package com.webbfontaine.example.backendgithubrestapi.client.interceptor;

import feign.RequestInterceptor;
import feign.RequestTemplate;
import org.springframework.http.HttpHeaders;

import java.util.Collections;
import java.util.HashMap;
/*feign:
  client:
    config:
      github-rest-api-client*/


public class GithubClientInterceptor implements RequestInterceptor {

    private HashMap<String, String> headers;


    @Override
    public void apply(RequestTemplate requestTemplate) {
        requestTemplate.header(HttpHeaders.AUTHORIZATION,"token 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");
        requestTemplate.header(HttpHeaders.ACCEPT,"application/vnd.github.v3+json");

    }
}
