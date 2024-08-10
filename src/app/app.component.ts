import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from "./comoponents/head/head.component";
import { HomeComponent } from "./comoponents/home/home.component";
import { EducationComponent } from "./comoponents/education/education.component";
import { TestimonialsComponent } from "./comoponents/testimonials/testimonials.component";
import { ProjectsComponent } from "./comoponents/projects/projects.component";
import { ContactComponent } from "./comoponents/contact/contact.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HeadComponent, HomeComponent, EducationComponent, TestimonialsComponent, ProjectsComponent, ContactComponent]
})
export class AppComponent {
  title = 'portfolioX';
}
