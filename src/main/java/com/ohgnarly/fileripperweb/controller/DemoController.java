package com.ohgnarly.fileripperweb.controller;

import com.ohgnarly.fileripper.FileOutput;
import com.ohgnarly.fileripper.FileRipper;
import com.ohgnarly.fileripperweb.model.FileRequest;
import com.ohgnarly.fileripperweb.model.FileResponse;
import lombok.SneakyThrows;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import static java.lang.String.format;
import static org.apache.commons.lang3.StringUtils.split;

@RestController
public class DemoController {
  private FileRipper fileRipper;

  public DemoController() {
    this.fileRipper = new FileRipper();
  }

  @PostMapping(value = "/api/rip-file")
  public ResponseEntity<FileResponse> ripFile(@ModelAttribute FileRequest fileRequest) {
    try {
      File file = createFile(fileRequest.getFile());
      FileOutput output = fileRipper.ripFile(file, fileRequest.convertFileDefinition());
      Files.delete(file.toPath());
      return ResponseEntity.ok(FileResponse.builder().fileOutput(output).build());
    } catch (Exception ex) {
      return ResponseEntity.ok(FileResponse.builder().errorMessage(ex.getMessage()).build());
    }
  }

  @SneakyThrows
  private File createFile(MultipartFile file) {
    String filename = file.getOriginalFilename();
    String prefix = split(filename, '.')[0];
    String ext = split(filename, '.')[1];

    if (!Files.exists(Paths.get("files"))) {
      Files.createDirectory(Paths.get("files"));
    }

    Path filepath = Files.createFile(Paths.get("files", format("%s-%s.%s", prefix, System.currentTimeMillis(), ext)));
    file.transferTo(filepath);
    return filepath.toFile();
  }
}
