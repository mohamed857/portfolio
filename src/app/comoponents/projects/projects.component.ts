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
    { id: 10, title: 'portfolio', description: 'portfolio', demoLink: 'https://portfolio-flame-seven-68.vercel.app/', githubLink: 'https://github.com/mohamed857/portfolio', img: 'assets/images/projects/portfolio.png' },
    { id: 1, title: 'web Service', description: 'services', demoLink: 'https://glowing-shortbread-a4a92b.netlify.app/', githubLink: 'https://github.com/mohamed857/website-angular17', img: 'assets/images/projects/webservice.png' },
    { id: 2, title: 'Blogs', description: 'write your own', demoLink: 'https://mo-ramadan.netlify.app/', githubLink: 'https://github.com/mohamed857/blog', img: 'assets/images/projects/blog.png' },
    { id: 7, title: 'blog-backend', description: 'blog-backend', demoLink: '', githubLink: 'https://github.com/mohamed857/blog-backend', img: 'assets/images/projects/code.png' },
    { id: 3, title: 'ticket Booking', description: 'tickets', demoLink: '', githubLink: 'https://github.com/mohamed857/ticket-booking', img: 'assets/images/projects/ticketbooking.png' },
    { id: 4, title: 'Repositores Getter', description: 'repositoresGetter', demoLink: 'https://github-repos-app.netlify.app/', githubLink: 'https://github.com/mohamed857/github-app', img: 'assets/images/projects/repositoresGetter.png' },
    { id: 5, title: 'E-Commerce', description: 'E-Commerce', demoLink: '', githubLink: 'https://github.com/mohamed857/E-Commerce', img: 'assets/images/projects/ecommerce.png' },
    { id: 6, title: 'Dashboard', description: 'dashboard', demoLink: '', githubLink: 'https://github.com/mohamed857/dashboard1', img: 'assets/images/projects/dashboard1.png' },
    { id: 7, title: 'hero-app', description: 'hero-app', demoLink: '', githubLink: 'https://github.com/mohamed857/hero-app', img: 'assets/images/projects/heroapp.png' },
    { id: 8, title: 'figma-dashboard', description: 'figma-dashboard', demoLink: '', githubLink: 'https://github.com/mohamed857/figma1', img: 'assets/images/projects/figma-dashboard.png' },
    { id: 9, title: 'tickets-sales', description: 'tickets-sales', demoLink: '', githubLink: 'https://github.com/mohamed857/tickets-sales', img: 'assets/images/projects/tickets-sales.png' },
  ]
}
