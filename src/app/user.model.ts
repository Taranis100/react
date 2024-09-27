// src/app/user.model.ts
export interface User {
  id: number;
  codice_fiscale: string;
  nome: string;
  cognome: string;
  data_nascita: string;
  azienda: string;
  user_id: string; // Questo dovrebbe essere l'ID dell'utente associato
}
