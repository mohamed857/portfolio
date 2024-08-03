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
    { id: 1, name: 'Ibrahim', rate: 5, description: 'orem ipsum dolor sit amet, consectetur adipisicing elit.', img: 'assets/images/clients/ibrahim.jpg' },
    { id: 2, name: 'Abdelrhman', rate: 4, description: 'orem ipsum dolor sit amet, consectetur adipisicing elit.', img: 'assets/images/clients/Abdelrhman.jpg' },
    { id: 3, name: 'Abdelrhman Mamdouh', rate: 5, description: 'orem ipsum dolor sit amet, consectetur adipisicing elit.', img: 'assets/images/clients/mamdouh.jpg' },
    // { id: , name:'', description:'',img:''},
  ]
  arryOfNumber =()=>{
    
  }
}
