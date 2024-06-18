import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Carte {
  nomCarte: string;
  expirationMois: string;
  expirationAnnee: string;
}

@Component({
  selector: 'app-formulaire-carte',
  templateUrl: './formulaire-carte.component.html',
  styleUrls: ['./formulaire-carte.component.css']
})
export class FormulaireCarteComponent implements OnInit {
  carteForm!: FormGroup;
  cartes: Carte[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.carteForm = this.fb.group({
      nomCarte: ['', Validators.required],
      codeCarte: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      ccv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
      expirationMois: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])$/)]],
      expirationAnnee: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]]
    });
  }

  onSubmit() {
    if (this.carteForm.valid) {
      const newCarte: Carte = {
        nomCarte: this.carteForm.value.nomCarte,
        expirationMois: this.carteForm.value.expirationMois,
        expirationAnnee: this.carteForm.value.expirationAnnee
      };

      this.cartes.push(newCarte);
      this.carteForm.reset();
    } else {
      console.log('Le formulaire est invalide');
    }
  }
}
