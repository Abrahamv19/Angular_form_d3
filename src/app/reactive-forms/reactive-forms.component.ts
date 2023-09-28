import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoVueValidator } from '../utils/custom-validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
  studentForm: FormGroup;
  
  constructor(private formbuilder: FormBuilder) {
    this.studentForm = this.formbuilder.group({
      email: this.formbuilder.control('', [Validators.required, Validators.email]),
      password: this.formbuilder.control('', [Validators.required, Validators.maxLength(10)]),
      curso: this.formbuilder.control('', [Validators.required, Validators.maxLength(40), NoVueValidator])

    });
  }

  get emailControl() {
    return this.studentForm.controls['email'];
  }
  get passwordControl() {
    return this.studentForm.controls['password'];
  }
  get cursoControl() {
    return this.studentForm.controls['curso'];
  }

  onSubmit(): void {
    console.log(this.studentForm.value);

    // console.log(this.studentForm);
    // console.log(this.studentForm.controls['email'].value);
    
    
    // VALIDAR CON UN ALERT 
    // if (this.studentForm.invalid) {
    //   alert('Debes llenar todos los campos para continuar');
    // } else {
    //   console.log(this.studentForm.value); 
    // }
    // console.log(this.studentForm.valid);
  }
}
