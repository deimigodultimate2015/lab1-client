import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFile: File = null;

  constructor(private httpClient: HttpClient) {}

  title = 'client-side-lab1';
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    fd.append('album', 'hnXiPMx');
    this.httpClient.post(`https://api.imgur.com/3/image`, fd, {headers: new HttpHeaders().set('Authorization', 'Client-ID 326f01c8af9dadf')}).subscribe(data => {
      console.log(data);
    });
  }
}
