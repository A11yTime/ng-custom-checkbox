import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CheckboxData } from '../CheckboxData';
@Injectable({
  providedIn: 'root'
})
export class Data1Service {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getCheckboxData(): Observable<CheckboxData[]> {
    return this.http.get<CheckboxData[]>(this.apiUrl);
  }
}
