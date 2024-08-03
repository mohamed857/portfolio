import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  educationa = [
    { id: 0, source: 'Ain Shams University', date: '2017-2022', description: 'Bachelor of Computer Science' },
    { id: 1, source: 'Udemy course', date: '2024', description: ' Angular 17 & 18 in Arabic - The Complete Guide (2024) ' },
    { id: 2, source: 'Camp', date: '2024', description: 'Angular Bootcamp (CodeAcademy)' },
  ]
}
