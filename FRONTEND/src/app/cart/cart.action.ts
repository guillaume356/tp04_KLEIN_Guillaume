
export class AddToCart {
    static readonly type = '[Cart] Add';
    constructor(public payload: any) {} 
  }
  
 // cart.action.ts
export class RemoveFromCart {
  static readonly type = '[Cart] Remove Article';
  constructor(public payload: any) {}
}
