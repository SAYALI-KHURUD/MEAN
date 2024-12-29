import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-take-admission',
  templateUrl: './take-admission.component.html',
  styleUrls: ['./take-admission.component.css']
})
export class TakeAdmissionComponent implements OnInit {
  admissionForm: FormGroup;
  courses: string[] = ['Angular', 'PPA', 'LB', 'Python'];

  constructor(private fb: FormBuilder, private http: HttpClient){
    this.admissionForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.admissionForm.valid) {
      console.log('Form Submitted:', this.admissionForm.value);
      // Add logic to send form data to the backend API
      alert('Admission request submitted successfully!');
    } else {
      alert('Please fill all the required fields!');
    }
  }
}
