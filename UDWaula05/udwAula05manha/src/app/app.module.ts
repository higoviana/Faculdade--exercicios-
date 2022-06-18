import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OiGenteComponent } from './oi-gente/oi-gente.component';
import { ContadorComponent } from './contador/contador.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    OiGenteComponent,
    ContadorComponent,
    UsuariosComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
