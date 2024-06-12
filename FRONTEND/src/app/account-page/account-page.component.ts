import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-account-page',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css'],
})
export class AccountPageComponent {
  accountForm = {
    username: '',
    password: ''
  }; 

  constructor(private http: HttpClient) {} 

  submitForm() {
    this.http.post('/register', this.accountForm).subscribe({
      next: (result) => {
        console.log('User created:', result);
      },
      error: (error) => {
        console.error('Error creating user:', error);
      }
    });
  }
}
