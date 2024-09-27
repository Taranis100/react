// src/app/login/login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onLogin(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Chiama il servizio di login e gestisci l'Observable restituito
      this.authService.login(username, password).subscribe(
        (admin: Admin) => { // Specifica il tipo di admin
          // Autenticazione riuscita, reindirizza all'elenco clienti
          this.router.navigate(['/clients']);
        },
        (error: any) => { // Specifica il tipo di error se possibile
          // Gestisci errore di login
          console.error('Login failed', error);
        }
      );
    }
  }
}
