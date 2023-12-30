package com.ohgnarly.fileripperweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Collections;

import static java.lang.System.getenv;
import static org.apache.commons.lang3.StringUtils.isNotBlank;

@SpringBootApplication
public class FileRipperWebApplication {
  public static void main(String[] args) {
    SpringApplication app = new SpringApplication(FileRipperWebApplication.class);
    String port = isNotBlank(getenv("PORT"))
            ? getenv("PORT")
            : "3000";
    app.setDefaultProperties(Collections.singletonMap("server.port", port));
    app.run(args);
  }
}
