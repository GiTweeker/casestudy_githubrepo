package com.webbfontaine.example.backendgithubrestapi;

import com.webbfontaine.example.backendgithubrestapi.client.GithubClient;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients(basePackages = {"com.webbfontaine.example.backendgithubrestapi.client"})
@EnableCaching
@Slf4j
public class BackendGithubRestapiApplication implements CommandLineRunner {

    @Autowired
    GithubClient githubClient;
    public static void main(String[] args) {
        SpringApplication.run(BackendGithubRestapiApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

      //  githubClient.searchRepositories(1,1,"ssdsd");

    }
}
