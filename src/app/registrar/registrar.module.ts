import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarPageRoutingModule } from './registrar-routing.module';
import { firebaseConfig } from "src/app/credenciales";
import {  AngularFireAuthModule } from "@angular/fire/auth";
import firebase from 'firebase';
firebase.initializeApp(firebaseConfig);

import { RegistrarPage } from './registrar.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,AngularFireAuthModule,ReactiveFormsModule,
    RegistrarPageRoutingModule
  ],
  declarations: [RegistrarPage]
})
export class RegistrarPageModule {}
