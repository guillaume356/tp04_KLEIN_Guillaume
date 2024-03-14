import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importez CommonModule
import { FormDataService } from '../body/form-data.service';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.css'],
  standalone: true,
  imports: [CommonModule] // Ajoutez CommonModule aux imports
})
export class RecapitulatifComponent implements OnInit {
  clientModel: any;

  constructor(private formDataService: FormDataService) {}

  ngOnInit(): void {
    this.clientModel = this.formDataService.getFormData();
    console.log("Retrieved form data in RecapitulatifComponent:", this.clientModel);
  }
}
