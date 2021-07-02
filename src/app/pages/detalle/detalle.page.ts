import { Component, OnInit } from '@angular/core';
import { FirestoreService } from "src/app/servicios/datos/firestore.service";
import { Router,ActivatedRoute } from "@angular/router";
import {AlertController  } from "@ionic/angular";


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
   cancion:any={}; 
   idCancion:any;
  constructor(public fs:FirestoreService, public r:Router, 
    public ar:ActivatedRoute,public AC:AlertController) { }

  ngOnInit() {
  this.idCancion=this.ar.snapshot.paramMap.get('id');
  this.cancion=this.fs.detalleCancion(this.idCancion).valueChanges();

  }

  async eliminarCancion(){
   const Alert= await this.AC.create({message:'Estas seguro de que quieres elimnar la cancion?',buttons:[
    {  
    text: 'Cancel', role: 'cancel' , handler:blah =>{ 
      console.log('Confirma la cancelacion: blah')
    },
    },
     { 
      text: 'OK', handler:() =>{ 
        this.fs.eliminarCancion(this.idCancion).then(()=>
         { this.r.navigateByUrl('/home')}
        );

      },
      
       },], 
    });
    
    await Alert.present();  
  }
}
