import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    { id:1, title: 'web Service', description: 'services', demoLink: 'https://glowing-shortbread-a4a92b.netlify.app/', githubLink: '', img: 'assets/images/projects/webservice.png' },
    { id:2, title: 'Blogs', description: 'write your own', demoLink: 'https://mo-ramadan.netlify.app/', githubLink: '', img: 'assets/images/projects/blog.png' },
    { id:3, title: 'ticket Booking', description: 'tickets', demoLink: '', githubLink: 'https://github.com/mohamed857/ticket-booking', img: 'assets/images/projects/ticketbooking.png' },
  ]
}
