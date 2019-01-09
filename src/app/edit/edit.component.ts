import {Component, OnDestroy, OnInit} from '@angular/core';
import {Student} from '../service/student';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from '../service/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  student: Student = new Student();
  submitted = false;
  messenger = '';
  majors: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.studentService.getMjorList().subscribe(data => {
      this.majors = data;
    }, error1 => {
      console.log(error1);
    })

    this.route.params.subscribe(_param => {
      const id = _param['id'];
      this.studentService.getStudentById(id).subscribe(data => {
        if (data) {
          this.student = data;
        } else {
          console.log(`Student with id: ${id} not found`);
          this.goToList();
        }
      });
    });
  }

  goToList() {
    this.messenger = '';
    this.student = new Student();
    this.router.navigate(['/student']);
  }

  btnCancel() {
    this.goToList();
  }

  onSubmit() {
    this.studentService.updateStudent(this.student, this.student.id).subscribe(data => {
      console.log(data);
      this.messenger = `Student ${this.student.id} was updated`;
    }, error1 => {
      console.log(error1);
      this.messenger = `Student ${this.student.id} update failed`;
    });
    this.submitted = true;
  }

  btnDelete() {
    this.studentService.deleteStudent(this.student.id).subscribe(data => {
      console.log(data);
      this.messenger = `Student ${this.student.id} was deleted`;
    }, error1 => {
      console.log(error1);
      this.messenger = `Student ${this.student.id} delete failed`;
    })
    this.submitted = true;
  }

}
