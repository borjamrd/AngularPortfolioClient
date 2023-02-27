import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { Page404Component } from './components/page404/page404.component';
import { ProjectComponent } from './components/project/project.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [



  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'projects/:idproject',
    component: ProjectComponent
  },
  {
    path: '404',
    component: Page404Component,
  },
  {
    path: '**',
    redirectTo: '404'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
