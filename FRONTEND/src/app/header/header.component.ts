import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartItemCountComponent } from '../cart-item-count-component/cart-item-count-component.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CartItemCountComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] 
})
export class HeaderComponent {
  
}

