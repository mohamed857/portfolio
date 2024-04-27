import { Component } from '@angular/core';
import { IconsComponent } from "../icons/icons.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [IconsComponent,RouterLink]
})
export class HomeComponent {

}
