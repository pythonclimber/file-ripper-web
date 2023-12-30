package com.ohgnarly.fileripperweb.model;

import com.ohgnarly.fileripper.FileOutput;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FileResponse {
  private String errorMessage;
  private FileOutput fileOutput;
}
