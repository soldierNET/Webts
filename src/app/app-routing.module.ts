import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NcreatStockComponent } from './ncreat-stock/ncreat-stock.component';
import { StocklistComponent } from './stocklist/stocklist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';

const routes: Routes = [
{path: '', redirectTo: 'Login', pathMatch: 'full'},
{path: 'Login', component: LoginComponent},
{path: 'Register', component: RegisterComponent},
{path: 'stock/list', component: StocklistComponent},
{path: 'stock/create', component: NcreatStockComponent},
{path: 'stock/:code', component: StockDetailsComponent},
{path: '**', redirectTo:'Register'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
