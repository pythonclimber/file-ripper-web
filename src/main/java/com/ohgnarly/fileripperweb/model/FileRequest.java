package com.ohgnarly.fileripperweb.model;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ohgnarly.fileripper.FileDefinition;
import lombok.Data;
import lombok.SneakyThrows;
import org.springframework.web.multipart.MultipartFile;

@Data
public class FileRequest {
  private String fileDefinition;
  private MultipartFile file;

  @SneakyThrows
  public FileDefinition convertFileDefinition() {
    return new ObjectMapper().readValue(this.fileDefinition, FileDefinition.class);
  }
}
