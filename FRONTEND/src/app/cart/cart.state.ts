// cart.state.ts
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddToCart, RemoveFromCart } from './cart.action';

export interface CartStateModel {
  items: any[]; 
}

@State<CartStateModel>({
  name: 'cart',
  defaults: {
    items: []
  }
})
export class CartState {
  @Selector()
  static getItems(state: CartStateModel): any[] {
    return state.items;
  }

  @Selector()
  static getNumberOfItems(state: CartStateModel): number {
    return state.items.length;
  }

  @Action(AddToCart)
  add({ getState, patchState }: StateContext<CartStateModel>, { payload }: AddToCart) {
    console.log('Action AddToCart received:', payload); 
    const state = getState();
    patchState({ items: [...state.items, payload] });
  }

  @Action(RemoveFromCart)
removeFromCart({ getState, patchState }: StateContext<CartStateModel>, { payload }: RemoveFromCart) {
  console.log('Avant suppression:', getState().items);
  const filteredItems = getState().items.filter(item => item.id !== payload.id);
  patchState({ items: filteredItems });
  console.log('Après suppression:', getState().items);
}
}
