import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from "@angular/forms";
import { LoadingController, AlertController  } from "@ionic/angular";
import { FirestoreService } from "src/app/servicios/datos/firestore.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {
   public formularioCrear:any;
  constructor(public lc:LoadingController,public ac:AlertController,public fs:FirestoreService,public fb:FormBuilder,public router:Router) {
 
     this.formularioCrear= fb.group({
      nombreAlbum:['', Validators.required],
      nombreArtista:['', Validators.required],
      descripCancion:['', Validators.required],
      nombreCancion:['', Validators.required],

     });
   }

  ngOnInit() {
  }

  async crearCancion(){
   const loading= await this.lc.create();
   const nombreAlbum= this.formularioCrear.value.nombreAlbum;
   const nombreArtista=this.formularioCrear.value.nombreArtista;
   const descripCancion=this.formularioCrear.value.descripCancion;
   const nombreCancion=this.formularioCrear.value.nombreCancion;

   this.fs.crearCancion(nombreAlbum,nombreArtista,descripCancion,nombreCancion).then(
     ()=> {  
       loading.dismiss().then(()=>{

        this.router.navigateByUrl('/home');
       });

     },error => {
        console.error(error);});
       return  await loading.present();
   

  }
}
