package com.webbfontaine.example.backendgithubrestapi.exception;

public class CustomGithubClientException extends RuntimeException{

    public CustomGithubClientException(String message) {
        super(message);
    }
}
