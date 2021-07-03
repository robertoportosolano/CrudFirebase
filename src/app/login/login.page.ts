import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/servicios/auth.service";
import { Router } from "@angular/router";
import { FormGroup,FormBuilder,Validators } from "@angular/forms";
import { AlertController } from "@ionic/angular";  

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  formularioLogin: FormGroup; 
  constructor(public AS:AuthService,public fb:FormBuilder,public router:Router,public ac:AlertController ) {
    this.buildForm();

   }

  ngOnInit() {
  }
  async loginUsuario(event: Event):Promise<void> {
    event.preventDefault();
    if ( this.formularioLogin.valid) {
        const value= this.formularioLogin.value;
        this.AS.loginUsuario(value.email,value.password).then(()=> { 
           this.router.navigateByUrl('/home');

        }, async error=>{

           const alerta= await this.ac.create({
             message: error.message, buttons:[{text:'Ok', role:'cancel'}],
                        
           });
           await alerta.present();
        }
      );
    } 
 }

  private buildForm(){
    this.formularioLogin= this.fb.group({
     email: ['', [Validators.required, Validators.email]],
     password: ['', [Validators.required, Validators.minLength]]
    });
  }
  get campoEmail(){ return this.formularioLogin.get('email'); }
  get campoPassword(){ return this.formularioLogin.get('password'); }

}
