import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Login, ResponseLogin } from '../../interface/login.interface';
import { RedirectService } from 'src/app/shared/services/redirect.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  public loginForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    }
  )
  constructor(public loginService:LoginService , public redirect:RedirectService){}

  public login(): void {
    const dataLogin: Login = {
      email: this.loginForm.get('email')?.value!,
      password: this.loginForm.get('password')?.value!
    }
    this.loginService.login(dataLogin).subscribe(
      {
        next: (value: ResponseLogin) => {
          console.log("www0", value);
          sessionStorage.setItem("auth", JSON.stringify(value));
          this.redirect.redirect('/home/home')
        },
        error: (err: any) => {
          console.log("ERR LOGIN COM", err)
          alert('Error al loguearse')
        }
      }
    )
  }
  
  
}
