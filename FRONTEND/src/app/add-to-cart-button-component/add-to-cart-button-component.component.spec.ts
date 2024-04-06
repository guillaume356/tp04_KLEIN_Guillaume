import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartButtonComponentComponent } from './add-to-cart-button-component.component';

describe('AddToCartButtonComponentComponent', () => {
  let component: AddToCartButtonComponentComponent;
  let fixture: ComponentFixture<AddToCartButtonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddToCartButtonComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddToCartButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
