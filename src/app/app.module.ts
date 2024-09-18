import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfileComponent } from './profile/profile.component';
import { CertificarComponent } from './certificar/certificar.component';
import { AgregarDocumentoComponent } from './agregar-documento/agregar-documento.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DocumentosPendientesComponent } from './documentos-pendientes/documentos-pendientes.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainPageComponent,
    ProfileComponent,
    CertificarComponent,
    AgregarDocumentoComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    DocumentosPendientesComponent,
    TransferenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
