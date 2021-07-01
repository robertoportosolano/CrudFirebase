import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument, AngularFirestoreModule } from "@angular/fire/firestore";
import { Cancion } from "src/app/cancion";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore:AngularFirestore) { }

  crearCancion(nombreAlbum:string,nombreArtista:string, descripCancion:string,nombreCancion:string):Promise<void> {
   const id= this.firestore.createId();
   return this.firestore.doc(`listaCancion/${id}`).set({id,nombreAlbum,nombreArtista,descripCancion,nombreCancion});
  }
 


}
