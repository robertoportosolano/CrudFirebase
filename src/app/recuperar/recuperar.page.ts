import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/servicios/auth.service";
import { Router } from "@angular/router";
import { FormGroup,FormBuilder,Validators } from "@angular/forms";
import { AlertController } from "@ionic/angular";  


@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
 
  formularioRecuperar: FormGroup; 
  constructor(public AS:AuthService,public fb:FormBuilder,public router:Router,public ac:AlertController ) {
    this.buildForm();
   }

  ngOnInit() { }

  async recuperarPassword(event: Event):Promise<void> {
    event.preventDefault();
    if ( this.formularioRecuperar.valid) {
        const value= this.formularioRecuperar.value;
        this.AS.reiniciarContraseña(value.email).then( async()=> {
         const Alerta = await this.ac.create({
          message:"Revisa tu correo, que te hemos enviado el enlace para que cambies tu contraseña",
          buttons: [{ text:'Ok', role:'cancel', handler:()=>   
         { this.router.navigateByUrl('login'); } }],      
         }); 
         await Alerta.present();
        
        }, async error=>{

           const errorAlerta= await this.ac.create({
             message: error.message, buttons:[{text:'Ok', role:'cancel'}],
                        
           });
           await errorAlerta.present();
        }
      );
    } 
 }

  private buildForm(){
    this.formularioRecuperar= this.fb.group({
     email: ['', [Validators.required, Validators.email]]
    });
  }
  get campoEmail(){ return this.formularioRecuperar.get('email'); }
  

}
