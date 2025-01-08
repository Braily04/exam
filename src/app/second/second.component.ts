import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
  standalone: true
})
export class SecondComponent {
  secondForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.secondForm = this.fb.group({
      name: ['',
        Validators.required],
      email: ['',
        [Validators.required,
          Validators.email]],
        lastName: ['',
          Validators.required],
          mobileNumber: ['',
          [Validators.required,
          Validators.pattern(/^\d{10}$/)]],
          username: ['',
          [Validators.required,
            Validators.email]],
          password: ['',
          [Validators.required,
            Validators.minLength(8),
            Validators.pattern(/[A-Z]/),
            Validators.pattern(/[a-z]/),
            Validators.pattern(/\d/)]]
    });
  }
     
     onSubmit(): void {
      if (this.secondForm.valid) {
        alert('Form submitted successfully!');

        console.log(this.secondForm.value);
      } else {
        alert('Please fix the errors before submitting');
      }
    }

    get f() {
      return this.secondForm.controls;
    }
}
