import { Component } from '@angular/core';
//importar classe Tab2Page de tab2.page.ts
import { FavoritosService } from '../services/favoritos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  itensFavoritos: any[] = [];
  favoritosSubscription: Subscription | undefined;

  constructor(private favoritosService: FavoritosService) {}

  ngOnInit() {
    this.itensFavoritos = this.favoritosService.getFavoritos();
    this.favoritosSubscription = this.favoritosService.favoritosChanged$.subscribe(() => {
    this.itensFavoritos = this.favoritosService.getFavoritos();
    });
  }

  ngOnDestroy() {
  if (this.favoritosSubscription) {
    this.favoritosSubscription.unsubscribe();
  }
}

  siga(url: string) {
    window.open(url, '_blank');
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

}
