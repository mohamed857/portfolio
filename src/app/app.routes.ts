import { Routes } from '@angular/router';
import { HomeComponent } from './comoponents/home/home.component';
import { PageNotFoundComponent } from './comoponents/page-not-found/page-not-found.component';
import { EducationComponent } from './comoponents/education/education.component';
import { ServicesComponent } from './comoponents/services/services.component';
import { TestimonialsComponent } from './comoponents/testimonials/testimonials.component';
import { ContactComponent } from './comoponents/contact/contact.component';
import { ProjectsComponent } from './comoponents/projects/projects.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'education',component:EducationComponent},
    {path:'services',component:ServicesComponent},
    {path:'testimonials',component:TestimonialsComponent},
    {path:'contact',component:ContactComponent},
    {path:'projects',component:ProjectsComponent},
    {path:'',pathMatch:'full',redirectTo:'home'},
    {path:'**',component:PageNotFoundComponent}

];
