import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginPageComponent {
  loginForm = {
    username: '',
    password: ''
  }; 

  constructor(private http: HttpClient) {} 

  submitForm() {
    this.http.post('http://localhost:8080/login.php', this.loginForm).subscribe({
      next: (result) => {
        console.log('Login successful:', result);
      },
      error: (error) => {
        console.error('Login error:', error);
      }
    });
  }
}
