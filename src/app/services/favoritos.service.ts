import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private favoritos: any[] = [];
  private favoritosChanged = new Subject<void>();

  favoritosChanged$ = this.favoritosChanged.asObservable();

  adicionarFavorito(item: any) {
    this.favoritos.push(item);
    this.favoritosChanged.next();
  }

  removerFavorito(item: any) {
    this.favoritos = this.favoritos.filter(f => f !== item);
    this.favoritosChanged.next();
  }

  getFavoritos() {
    return this.favoritos;
  }
}