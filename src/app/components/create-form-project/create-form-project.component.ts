import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-form-project',
  templateUrl: './create-form-project.component.html',
  styleUrls: ['./create-form-project.component.scss']
})
export class CreateFormProjectComponent implements OnInit {

  projectForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      scope: new FormControl(''),
      startDate: new FormControl(''),
      prevEndDate: new FormControl(''),
    });


  }


  sendForm = (ev) => {
    console.log(this.projectForm.value);
  }

}
