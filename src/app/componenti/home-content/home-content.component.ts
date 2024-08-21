import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.css'
})
export class HomeContentComponent implements OnInit{
  
  todayDate!: string; 
  utente!:string;
  ngOnInit(): void {
      const today = new Date();
      this.todayDate = today.toLocaleDateString('it-IT', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      this.utente = "Paola";
  }

}
