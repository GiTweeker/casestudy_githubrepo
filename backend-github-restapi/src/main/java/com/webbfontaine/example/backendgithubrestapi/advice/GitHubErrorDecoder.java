package com.webbfontaine.example.backendgithubrestapi.advice;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.webbfontaine.example.backendgithubrestapi.exception.CustomGithubClientException;
import com.webbfontaine.example.backendgithubrestapi.pojo.RestResponsePojo;
import feign.Response;
import feign.codec.ErrorDecoder;
import lombok.extern.slf4j.Slf4j;

import java.io.IOException;
/*{
    "message": "API rate limit exceeded for 154.113.163.89. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
    "documentation_url": "https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting"
}*/
@Slf4j
public class GitHubErrorDecoder implements ErrorDecoder {
    @Override
    public Exception decode(String methodKey, Response response) {


        String message  = "Unexpected Error Processing Request.";

        //log.info("Custom error decodder");
        try {
            ObjectMapper objectMapper = new ObjectMapper();

            RestResponsePojo<String> restResponsePojo =
                    objectMapper.readValue(response.body().asReader(),
                            new TypeReference<
                                    RestResponsePojo<String>
                                    >() {});
            message = restResponsePojo.getMessage();
            message = String.format("%s - %s",response.status(), message ) ;

        } catch (IOException e) {
            e.printStackTrace();
        }
        return new CustomGithubClientException(message);
    }
}
