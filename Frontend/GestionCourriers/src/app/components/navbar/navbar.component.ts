import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  ministere: string = ''; // Variable pour stocker le nom du ministère
  nomarab: string = ''; // Variable pour stocker le nom en arabe du ministère

  constructor(private router: Router, private authService: AuthService, private http: HttpClient) {
  }

  ngOnInit(): void {
    // Charger les données du fichier texte lors de l'initialisation du composant
    this.loadTextData();
  }

  loadTextData() {
    // Charger les données du fichier texte en utilisant HttpClient
    this.http.get('assets/noms.txt', { responseType: 'text' })
      .subscribe(data => {
        // Diviser les données en lignes
        const lines = data.split('\n');
        // Parcourir les lignes et extraire les valeurs pour les variables appropriées
        lines.forEach(line => {
          const parts = line.split('=');
          if (parts.length === 2) {
            const key = parts[0].trim();
            const value = parts[1].trim();
            // Affecter les valeurs aux variables appropriées en fonction de la clé
            if (key === 'ministere') {
              this.ministere = value;
            } else if (key === 'nomarab') {
              this.nomarab = value;
            }
          }
        });
      });
  }

  isLoginPage() {
    return this.router.url === '/login';
  }

  gotoResePassword() {
    this.logout();
    this.router.navigate(['/login']);
  }

  logout() {
    this.authService.logout();
  }
}
