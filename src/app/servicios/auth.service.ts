import { Injectable } from '@angular/core';
//import { AngularFireAuth } from "@angular/fire/auth";
import firebase  from "firebase/app";
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUsuario(email: string, password:string):Promise<firebase.auth.UserCredential>{

   return firebase.auth().signInWithEmailAndPassword(email,password); 
  }

  registrarUsuario(email: string, password:string):Promise<any>{
   return firebase.auth().createUserWithEmailAndPassword(email,password);
  }

  reiniciarContrase├▒a(email: string):Promise<void>{

   return firebase.auth().sendPasswordResetEmail(email);
  }
   
  cerrarSesion():Promise<void>{
  return firebase.auth().signOut();
  }

   obtenerUsuario(){
    return firebase.auth().currentUser;
   }

   usuarioActual(){
      return firebase.auth().onAuthStateChanged;
   }

}
