package com.ohgnarly.fileripperweb.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.io.File;
import java.nio.file.Files;

@RequiredArgsConstructor
public class FileWrapper implements AutoCloseable {
  @Getter private final File fileObject;

  @Override
  public void close() throws Exception {
    Files.delete(fileObject.toPath());
  }
}
