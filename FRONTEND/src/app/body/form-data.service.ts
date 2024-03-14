import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private formData: any;

  setFormData(data: any) {
    console.log("Storing form data", data);
    this.formData = data;
  }

  getFormData() {
    console.log("Retrieving form data", this.formData);
    return this.formData;
  }
}
