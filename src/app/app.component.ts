import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { IForm } from './formModel';
import { NgForOf, JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, NgForOf, JsonPipe, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  years: number[] = [];
  formGroup: FormGroup<IForm> = new FormGroup<IForm>({
    firstName: new FormControl<string>(""),
    lastName: new FormControl<string>(""),
    nickName: new FormControl<string>(""),
    email: new FormControl<string>(""),
    birthYear: new FormControl<number>(0),
    passNumber: new FormControl<number>(0),
  })

  generateYears(): void {
    const currentYear = new Date().getFullYear();
    for (let year = 2000; year <= currentYear; year++)
      this.years.push(year);
  }

  ngOnInit(): void {
    this.generateYears();
  }

  onSubmit() {

  }
}
