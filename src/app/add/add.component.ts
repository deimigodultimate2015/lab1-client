import { Component, OnInit } from '@angular/core';
import {Student} from '../service/student';
import {StudentService} from '../service/student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  student: Student = new Student();
  submitted = false
  majors: string[] = []

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    this.studentService.getMjorList().subscribe(data => {
      this.majors = data;
    }, error1 => {
      console.log(error1);
    });
  }

  btnCancel() {
    this.router.navigate(['/student']);
  }

  newStudent() {
    this.student = new Student();
    this.submitted = false;
  }

  onSubmit() {
    this.studentService.addStudent(this.student).subscribe(data => {
      console.log(data);
    }, error1 => {
      console.log(error1);
    });
    this.student = new Student();
    this.submitted = true;
  }
}


