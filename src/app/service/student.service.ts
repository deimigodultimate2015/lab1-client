import { Injectable } from '@angular/core';
import {Student} from './student';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private websiteUrl = 'https://my-brothel.herokuapp.com/'
  private addUrl = `${this.websiteUrl}student/create`;
  private getUrl = `${this.websiteUrl}student/get`;
  private deleteUrl = `${this.websiteUrl}student/delete`;
  private editUrl = `${this.websiteUrl}student/edit`;
  private getMajorUrl = `${this.websiteUrl}student/major`

  constructor(private httpClient: HttpClient) { }

  addStudent(info: Student): Observable<Object> {
    return this.httpClient.post(this.addUrl, info);
  }

  getMjorList(): Observable<any> {
    return this.httpClient.get(this.getMajorUrl);
  }

  getStudentList(): Observable<any> {
    return this.httpClient.get(this.getUrl);
  }

  updateStudent(student: Student, id: number): Observable<Object> {
    return this.httpClient.put(`${this.editUrl}/${id}`, student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.httpClient.delete(`${this.deleteUrl}/${id}`, {responseType: 'text'});
  }

  getStudentById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`${this.getUrl}/${id}`);
  }
}
