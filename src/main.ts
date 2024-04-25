import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('nav');
// let part = document.querySelectorAll('.part');
// let header = document.querySelectorAll('header nav a');
// window.onscroll=()=>{
//   part.forEach(sec=>{
//     let top = window.scrollY;
//     let offset = sec!.offsetTop - 150;
//   })
// }