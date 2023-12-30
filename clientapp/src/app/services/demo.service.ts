import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {FileType} from "../domain/file-type";
import {FileDefinition} from "../domain/file-definition";

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  constructor(private httpClient: HttpClient) { }

  getFileTypes: () => Observable<FileType[]> = () => {
    return this.httpClient.get<FileType[]>(`${environment.apiBaseUrl}/api/file-types`);
  };

  submitFile: (data: any) => Observable<FileDefinition> = (data: any) => {
    return this.httpClient.post<FileDefinition>(`${environment.apiBaseUrl}/api/rip-file`, data);
  };
}
