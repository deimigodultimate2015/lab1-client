import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Student} from '../service/student';
import {StudentService} from '../service/student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  students: Observable<Student[]>;

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  newStudent() {
    this.router.navigate(['student/add']);
  }

  reloadData() {
    this.students = this.studentService.getStudentList();
  }

}
