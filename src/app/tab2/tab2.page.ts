import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FavoritosService } from '../services/favoritos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  items = [
    { name: 'Praia dos padres', location: 'Guarapari', isLiked: false, regiao: 'Sul', url: 'https://www.tripadvisor.com.br/Attraction_Review-g941641-d2408025-Reviews-Praia_dos_Padres-Guarapari_State_of_Espirito_Santo.html', img:'../../assets/imgs/praia-dos-padres.jpg' },
    { name: 'Praia de camburi', location: 'Vitória', isLiked: false, regiao: 'Sul', url: 'https://www.tripadvisor.com.br/Attraction_Review-g303506-d2408024-Reviews-Camburi_Beach-Vitoria_State_of_Espirito_Santo.html', img:'../../assets/imgs/camburi.jpg' },
    // Adicione mais itens conforme necessário
  ];

  constructor(private toastController: ToastController, private favoritosService: FavoritosService) {}

  openSite(url: string) {
    window.open(url, '_blank');
  }

  async like(index: number) {
    const item = this.items[index];
    if (!item.isLiked) {
      const toast = await this.toastController.create({
        message: 'Obrigado por curtir!',
        duration: 2000,
        positionAnchor: 'footer',
      });
      this.favoritosService.adicionarFavorito(item);
      toast.present();
    } else {
      const toast = await this.toastController.create({
        message: 'Descurtido!',
        duration: 2000,
        positionAnchor: 'footer',
      });
      this.favoritosService.removerFavorito(item);
      toast.present();
    }
    item.isLiked = !item.isLiked;
    
  }

  // Abaixo código para filtrar os itens
  searchTerm: string = '';
  filteredItems: any[] = [];
  filterItems() {
    this.filteredItems = this.items.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  


}



