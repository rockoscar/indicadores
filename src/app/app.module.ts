import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from "./app.routing";
import { HttpModule } from "@angular/http";

//componentes
import { AppComponent } from './app.component';
import { VentasComponent } from './componentes/ventas/ventas.component';
import { DesarrolloComponent } from './componentes/desarrollo/desarrollo.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { DetalleUsuarioComponent } from './componentes/detalle-usuario/detalle-usuario.component';
import { AgregaIndicadorComponent } from './componentes/agrega-indicador/agrega-indicador.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { AdminIndicadorComponent } from './componentes/admin-indicador/admin-indicador.component';
import { IndiIdComponent } from './componentes/indi-id/indi-id.component';
import { AdminUsuarioComponent } from './componentes/admin-usuario/admin-usuario.component';
import { AgregaUsuarioComponent } from './componentes/agrega-usuario/agrega-usuario.component';
import { UsuarioIdComponent } from './componentes/usuario-id/usuario-id.component';

//pipes
import { sumador } from './componentes/pipes/pipes';
import { sumador1Pipe } from './componentes/pipes/pipes';
import { resultadoPipe } from './componentes/pipes/pipes';
import { FechaInicioPipe } from './componentes/pipes/pipes';
import { fechaTerminoPipe } from './componentes/pipes/pipes';
import { tipoPipe } from './componentes/pipes/pipes';
import { tituloPipe } from './componentes/pipes/pipes';
import { procesoPipe } from './componentes/pipes/pipes';

import { DashPadreComponent } from './componentes/dash-padre/dash-padre.component';
import { DashHijoComponent } from './componentes/dash-hijo/dash-hijo.component';
import { GraficasComponent } from './componentes/graficas/graficas.component';
import { GraficadorComponent } from './componentes/graficador/graficador.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, VentasComponent, DesarrolloComponent, InicioComponent, LoginComponent, DetalleUsuarioComponent, AgregaIndicadorComponent, DashboardComponent, sumador, sumador1Pipe, resultadoPipe, FechaInicioPipe, fechaTerminoPipe, AdminIndicadorComponent, IndiIdComponent, AdminUsuarioComponent, AgregaUsuarioComponent, UsuarioIdComponent, tipoPipe, DashPadreComponent, DashHijoComponent, tituloPipe, GraficasComponent, GraficadorComponent, procesoPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
