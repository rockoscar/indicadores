//modulos requeridos para el routing
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { VentasComponent } from "./componentes/ventas/ventas.component";
import { DesarrolloComponent } from "./componentes/desarrollo/desarrollo.component";
import { InicioComponent } from "./componentes/inicio/inicio.component";
import { LoginComponent } from "./componentes/login/login.component";
import { DetalleUsuarioComponent } from "./componentes/detalle-usuario/detalle-usuario.component";
import { AgregaIndicadorComponent } from "./componentes/agrega-indicador/agrega-indicador.component";
import { DashboardComponent } from "./componentes/dashboard/dashboard.component";
import { AdminIndicadorComponent } from './componentes/admin-indicador/admin-indicador.component';
import { IndiIdComponent } from './componentes/indi-id/indi-id.component';
import { AdminUsuarioComponent } from './componentes/admin-usuario/admin-usuario.component';
import { AgregaUsuarioComponent } from './componentes/agrega-usuario/agrega-usuario.component';
import { UsuarioIdComponent } from './componentes/usuario-id/usuario-id.component';
import { DashPadreComponent } from './componentes/dash-padre/dash-padre.component';
import { GraficasComponent } from './componentes/graficas/graficas.component';
import { GraficadorComponent } from './componentes/graficador/graficador.component';

//se crea una constante de tipo array donde se guardaran las rutas
const appRoutes: Routes = [
  //se van definiendo cada una de las rutas
  //cuando la ruta esta vacia abre el componente tiendacomponent
  //{path:'', component: InicioComponent},

  { path: "", redirectTo: "login", pathMatch: "full" },

  //cuando la ruta es tienda abre el componente
  { path: "ventas", component: VentasComponent },
  { path: "desarrollo", component: DesarrolloComponent },
  { path: "inicio", component: InicioComponent },
  { path: "login", component: LoginComponent },
  { path: "mis-datos", component: DetalleUsuarioComponent },
  { path: "agrega-indicador", component: AgregaIndicadorComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "admin-indicadores", component: AdminIndicadorComponent },
  { path: "indicador/:id", component: IndiIdComponent },
  { path: "admin-usuarios", component: AdminUsuarioComponent },
  { path: "agrega-usuario", component: AgregaUsuarioComponent },
  { path: "usuario/:id", component: UsuarioIdComponent },
  { path: "graficas", component: GraficadorComponent },
  
  
  
  //tener cuidado con el orden de las rutas, debe ir hasta abajo el comodin **

  { path: "**", component: LoginComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);