import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{Department} from '../models/department.model';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
 //gender = 'male';

 departments : Department[] = [
   {id:1,name:'IT'},
   {id:2,name:'Accounting'},
   {id:3,name:'Science'},
   {id:4,name:'General'}
  ];
  constructor() { }

  ngOnInit() {
  }
  saveStudent(stdForm:NgForm):void{
    console.log(stdForm.value)
  }
}
