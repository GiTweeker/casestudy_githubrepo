package com.webbfontaine.example.backendgithubrestapi.pojo.commitstats;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RepCommitStats<T> {
    T key;
    Integer count;
}
