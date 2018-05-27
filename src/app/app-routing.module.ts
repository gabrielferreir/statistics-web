import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './main/main.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { DataInsertionComponent } from './main/data-insertion/data-insertion.component';
import {CorrelacaoRegressaoComponent} from './main/correlacao-regressao/correlacao-regressao.component';
import {DistribuicaoUniformeComponent} from './main/distribuicao-uniforme/distribuicao-uniforme.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'insert', component: DataInsertionComponent},
      {path: 'correlacao-regressao', component: CorrelacaoRegressaoComponent},
      {path: 'distribuicao-uniforme', component: DistribuicaoUniformeComponent},
    ]
  }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
