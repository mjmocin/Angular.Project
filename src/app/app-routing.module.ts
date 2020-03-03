import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './home/cliente/cliente.component';
import { EnderecoComponent } from './home/endereco/endereco.component';
import { FinanceiroComponent } from './home/financeiro/financeiro.component';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = [{path: '', component: LoginComponent},
                        {path: 'login', component: LoginComponent},
                        {path: 'home', component: HomeComponent,
                        children:[
                          {path:'cliente', component: ClienteComponent, outlet: 'HomeComponent'},
                          {path:'endereco', component: EnderecoComponent, outlet: 'HomeComponent'},
                          {path:'financeiro', component: FinanceiroComponent, outlet: 'HomeComponent'}
                        ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
