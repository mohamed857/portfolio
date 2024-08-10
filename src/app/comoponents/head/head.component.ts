import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.routerState.snapshot.root.fragment;
        if (fragment) {
          this.scrollToFragment(fragment);
        }
      }
    });
  }

  private scrollToFragment(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
