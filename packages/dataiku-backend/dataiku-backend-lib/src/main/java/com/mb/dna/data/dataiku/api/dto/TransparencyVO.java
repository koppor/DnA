package com.mb.dna.data.dataiku.api.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.micronaut.validation.Validated;

@Validated
public class TransparencyVO {

    @JsonProperty("projectCount")
    private Integer projectCount = 0;

    @JsonProperty("userCount")
    private Integer userCount = 0;

    public Integer getProjectCount() {
        return projectCount;
    }

    public void setProjectCount(Integer projectCount) {
        this.projectCount = projectCount;
    }

    public Integer getUserCount() {
        return userCount;
    }

    public void setUserCount(Integer userCount) {
        this.userCount = userCount;
    }
}
