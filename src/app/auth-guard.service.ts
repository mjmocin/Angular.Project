import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private rota: Router) { }
  
  canActivate(): boolean {
    if (localStorage.getItem('chave')) {
        this.rota.navigate(['/home']);
        return true;
    }
    this.rota.navigate(['/login']);
    return false;
  }
}

