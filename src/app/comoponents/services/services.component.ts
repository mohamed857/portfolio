import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    { id: 1, title: 'Web Development', description: 'We create modern, responsive websites.' },
    { id: 2, title: 'Frontend Development', description: 'We help you build cross-platform apps.' },
    { id: 3, title: 'E-Commerce Solutions', description: 'We help you create engaging online stores.' },
    { id: 4, title: 'Branding & Marketing', description: 'We help you create memorable brand identities.' },
    { id: 5, title: 'Backend Development', description: 'We help you analyze and interpret data.' },

  ];
}
