import { Component } from '@angular/core';
import { IconsComponent } from "../icons/icons.component";

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    imports: [IconsComponent]
})
export class FooterComponent {

}
