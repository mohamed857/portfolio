import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss'
})
export class HeadComponent {
  links = [
    { id: 1, title: 'Home', path: 'home' },
    { id: 2, title: 'Education', path: 'education' },
    // { id: 3, title: 'Services', path: 'services' },
    { id: 4, title: 'Testimonials', path: 'testimonials' },
    { id: 5, title: 'Projects', path: 'projects' },
    { id: 6, title: 'Contact', path: 'contact' },
  ]
}
