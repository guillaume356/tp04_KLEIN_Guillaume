import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormDataService } from './form-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  // Définition explicite de clientModel avec toutes les propriétés
  clientModel = {
    nom: '',
    prenom: '',
    adresse: '',
    cp: '',
    ville: '',
    tel: '',
    email: '',
    civilite: '',
    password: '',
    login: '',
    pays: ''
  };

  @Output() formSubmitted = new EventEmitter<boolean>(); // Ajoutez cette ligne

  constructor(private formDataService: FormDataService, private router: Router) {}

  onSubmit() {
    if (!this.isValidName(this.clientModel.nom) || !this.isValidName(this.clientModel.prenom) || !this.isValidName(this.clientModel.ville) || !this.isValidName(this.clientModel.civilite) || !this.isValidName(this.clientModel.pays)) {
      alert("Le nom le prénom la ville la civilité et le pays ne doivent contenir que des lettres, des tirets, des apostrophes et des espaces e ne doivent pas être vides.");
      return; // Empêche l'envoi du formulaire
    } 
    if (!this.isValidNumber(this.clientModel.cp) || !this.isValidNumber(this.clientModel.tel)) {
      alert("Le code Postal et le télhphone doivent uniquement contenir des chiffres et ne doivent pas être vides");
      return; // Empêche l'envoi du formulaire
    }
    
    this.formDataService.setFormData(this.clientModel);
    
    this.formSubmitted.emit(true); // Émettre l'événement lors de la soumission
    console.log('Formulaire soumis');
    this.router.navigate(['/recapitulatif']);
  }

  containsNumbers(string: string): boolean {
    return /\d/.test(string);
  }

  isValidName(string: string): boolean {
    return /^[A-Za-z\s'-]+$/.test(string);
  }

  // Méthode pour vérifier si la chaîne est un nombre valide
  isValidNumber(string: string): boolean {
    return /^\d+$/.test(string); // Cette regex accepte uniquement les nombres entiers positifs
  }

  validateNumber(value: string) {
    if (!this.isValidNumber(value)) {
      console.log("Champ invalide, ce dernier doit uniquement contenir des chiffres.");
    } else {
      console.log("Champ valide, contient un nombre valide.");
    }
  }

  // Validation en temps réel du prénom
  validatePrenom(value: string) {
    if (!this.isValidName(value)) {
      console.log("Prénom invalide. Le prénom ne doit contenir que des lettres, des tirets, des apostrophes et des espaces.");
    }
  }

    // Validation en temps réel du prénom
    validateNom(value: string) {
      if (!this.isValidName(value)) {
        console.log("Nom invalide. Le Nom ne doit contenir que des lettres, des tirets, des apostrophes et des espaces.");
      }
    }
}
