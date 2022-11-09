import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProjectComponent } from './components/project/project.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [

  {
    path: '',
    component: MainComponent,
  },
  {
    path: ':idproject',
    component: ProjectComponent
  },
  // {
  //   path: 'results',
  //   component: ResultsComponent,
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
