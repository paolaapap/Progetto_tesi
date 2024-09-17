import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, ReactiveFormsModule, RouterLink, MatCheckboxModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  accForm!: FormGroup;
  isChecked = true;

  toggleSingleSelectionIndicator() {
    this.isChecked = !this.isChecked;
  }

  ngOnInit(): void {
    this.accForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8) // Almeno 8 caratteri
      ]),
      isTeacher: new FormControl(this.isChecked)
    })  
  }

  onSubmit(){
    console.log(this.accForm);  
  }
}
