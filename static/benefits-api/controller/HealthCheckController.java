package com.optum.geba.benefitsapi.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/healthcheck/v1")
class HealthCheckController {
    private static final Logger logger = LoggerFactory.getLogger(HealthCheckController.class);

    @GetMapping("/logger")
    public String checkLoggerHealth() {
        logger.info("class HealthCheckController  Index Method Start");

        return "Welcome to the HealthCheckController Logger Level API!";
    }
}