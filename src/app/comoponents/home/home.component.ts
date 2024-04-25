import { Component } from '@angular/core';
import { IconsComponent } from "../icons/icons.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [IconsComponent]
})
export class HomeComponent {

}
