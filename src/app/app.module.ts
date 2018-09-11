import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ConfigService } from './services/config.service';
import { DesafioService } from './services/desafio.service';
import { ConsultaComponent } from './desafio/consulta/consulta.component';
import { CadastroComponent } from './desafio/cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routes';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,MenuComponent,ConsultaComponent,CadastroComponent,HomeComponent
  ],
  imports: [
    BrowserModule,HttpModule,routing 
  ],
  providers: [ConfigService,DesafioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
