// home.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../../Services/auth-service.service'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userType!: string;

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.authService.checkSession().subscribe({
      next: (response) => {
        if (!response.logged_in) {
          this.router.navigate(['/login']);
        } else {
          this.userType = response.user_type;
        }
      },
      error: (err) => {
        console.error('Errore verifica sessione:', err);
        this.router.navigate(['/login']);
      }
    });
  }

  onLogout() {
    this.authService.logout().subscribe({
      next: (response) => {
        this.snackBar.open('Logout effettuato con successo!', 'Chiudi', { duration: 3000 });
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.snackBar.open('Errore durante il logout. Riprova.', 'Chiudi', { duration: 3000 });
        console.error('Errore logout:', err);
      }
    });
  }

  navigateToNuovoAvviso(): void {
    this.router.navigate(['/home/nuovoavviso']);
  }

  navigateToNuovoAppello(): void {
    this.router.navigate(['/home/nuovoappello']);
  }

  navigateToNuovoCorso(): void {
    this.router.navigate(['/home/nuovocorso']);
  }

  navigateToNuovoMateriale(): void {
    this.router.navigate(['/home/nuovomateriale']);
  }

  navigateToHome(): void{
    this.router.navigate(['home']);
  }
}
