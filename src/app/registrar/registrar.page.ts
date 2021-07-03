import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/servicios/auth.service";
import { Router } from "@angular/router";
import { FormGroup,FormBuilder,Validators } from "@angular/forms";
import { AlertController } from "@ionic/angular";  

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  formularioRegistrar: FormGroup; 
  constructor(public AS:AuthService,public fb:FormBuilder,public router:Router,public ac:AlertController ) {
    this.buildForm();

   }

  ngOnInit() {
  }
  async registrarUsuario(event: Event):Promise<void> {
    event.preventDefault();
    if ( this.formularioRegistrar.valid) {
        const value= this.formularioRegistrar.value;
        this.AS.registrarUsuario(value.email,value.password).then(()=> { 
           this.router.navigateByUrl('/login');

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
    this.formularioRegistrar= this.fb.group({
     email: ['', [Validators.required, Validators.email]],
     password: ['', [Validators.required, Validators.minLength]]
    });
  }
  get campoEmail(){ return this.formularioRegistrar.get('email'); }
  get campoPassword(){ return this.formularioRegistrar.get('password'); }

}
