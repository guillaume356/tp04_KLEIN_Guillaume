import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Article } from './article.model';
import { AddArticle, ArticleState } from './articles.state';
import { CartItemCountComponent } from '../cart-item-count-component/cart-item-count-component.component';
import { AddToCartButtonComponent } from '../add-to-cart-button-component/add-to-cart-button-component.component';
import { CartState } from '../cart/cart.state'; // Assurez-vous que le chemin est correct
import { RemoveFromCart } from '../cart/cart.action'; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, FormsModule, CartItemCountComponent, AddToCartButtonComponent], 
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @Select(ArticleState.getArticles) articles$?: Observable<Article[]>;
  @Select(CartState.getItems) cartItems$?: Observable<Article[]>; // Assurez-vous que le type correspond à votre structure de données

  newArticle: Article = { id: '', title: '', content: '' };

  constructor(private store: Store) {}

  addArticle() {
    // Logique pour ajouter un article
    this.newArticle.id = Date.now().toString();
    this.store.dispatch(new AddArticle(this.newArticle));
    this.newArticle = { id: '', title: '', content: '' }; // Réinitialiser pour la prochaine saisie
  }

  removeFromCart(item: Article) { // Ajustez le type si nécessaire
    
  console.log('Dispatching RemoveFromCart action with item:', item);
    this.store.dispatch(new RemoveFromCart(item));
  }
}
