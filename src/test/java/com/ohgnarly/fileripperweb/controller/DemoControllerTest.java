package com.ohgnarly.fileripperweb.controller;

import lombok.SneakyThrows;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class DemoControllerTest {
  @Autowired private MockMvc mockMvc;

  @Test
  @Disabled
  @SneakyThrows
  void testRipFile_Returns200() {
    this.mockMvc
        .perform(post("/api/rip-file").contentType("application/json"))
        .andDo(print())
        .andExpect(status().isOk());
  }
}
