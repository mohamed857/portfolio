import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials = [
    { id: 1, name: 'ghareb', rate: 5, description: 'orem ipsum dolor sit amet, consectetur adipisicing elit.', img: 'assets/images/clients/ghareb.png' },
    { id: 2, name: 'Zain', rate: 5, description: 'orem ipsum dolor sit amet, consectetur adipisicing elit.', img: 'assets/images/clients/zain.jpg' },
    { id: 3, name: 'walid', rate: 3, description: 'orem ipsum dolor sit amet, consectetur adipisicing elit orem ipsum dolor sit amet, consectetur adipisicing elit orem ipsum dolor sit amet, consectetur adipisicing elit.', img: 'assets/images/clients/walid.jpg' },
    { id: 4, name: 'Ibrahim', rate: 5, description: 'orem ipsum dolor sit amet, consectetur adipisicing elit.', img: 'assets/images/clients/ibrahim.jpg' },
    { id: 5, name: 'Abdelrhman', rate: 4, description: 'orem ipsum dolor sit amet, consectetur adipisicing elit.', img: 'assets/images/clients/Abdelrhman.jpg' },
    { id: 6, name: 'Abdelrhman Mamdouh', rate: 2, description: 'orem ipsum dolor sit amet, consectetur adipisicing elit.', img: 'assets/images/clients/mamdouh.jpg' },
    // { id: , name:'', description:'',img:''},
  ]
  arryOfNumber =()=>{
    
  }
}
