import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { RestoComponent } from './pages/resto/resto.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'resto', pathMatch: 'full'
  },
  {
    path: 'resto', component: RestoComponent
  },
  {
    path: 'resto/:id', component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
