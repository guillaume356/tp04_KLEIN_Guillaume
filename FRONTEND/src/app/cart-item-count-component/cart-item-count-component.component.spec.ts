import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemCountComponent } from './cart-item-count-component.component';

describe('CartItemCountComponentComponent', () => {
  let component: CartItemCountComponent;
  let fixture: ComponentFixture<CartItemCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartItemCountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartItemCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
