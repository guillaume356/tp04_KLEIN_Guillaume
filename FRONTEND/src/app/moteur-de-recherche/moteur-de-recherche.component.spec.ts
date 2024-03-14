import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoteurDeRechercheComponent } from './moteur-de-recherche.component';

describe('MoteurDeRechercheComponent', () => {
  let component: MoteurDeRechercheComponent;
  let fixture: ComponentFixture<MoteurDeRechercheComponent>;

  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoteurDeRechercheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoteurDeRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
