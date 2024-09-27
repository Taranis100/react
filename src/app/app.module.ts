import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importa solo HttpClientModule
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Assicurati che il percorso sia corretto
import { AppComponent } from './app.component';
import { ListClientComponent } from './list-client/list-client.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListClientComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Assicurati di avere importato il modulo per le richieste HTTP
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule // Modulo di routing per la navigazione
  ],
  providers: [], // Puoi aggiungere qui i tuoi servizi
  bootstrap: [AppComponent] // Il componente radice dell'app
})
export class AppModule { }
