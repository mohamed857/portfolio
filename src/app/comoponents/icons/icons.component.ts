import { Component } from '@angular/core';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent {
  links=[
    {id:1,iconClass:'bi bi-facebook',href:'https://www.facebook.com/MohamedRamadan.cc'},
    {id:2,iconClass:'bi bi-instagram',href:'https://www.instagram.com/mohamedramadan.cc/'},
    {id:3,iconClass:'bi bi-linkedin',href:'https://www.linkedin.com/in/mohamed-ramadan-hasan-71780b1b8/'},
    {id:4,iconClass:'bi bi-github',href:'https://github.com/mohamed857'},
    {id:5,iconClass:'bi bi-twitter-x',href:'https://twitter.com/elcessy_m'},
  ]
}
