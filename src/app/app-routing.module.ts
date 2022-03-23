import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ListaPostsComponent },
  { path: 'post', component: ListaPostsComponent },
  { path: 'new', component: FormularioComponent },
  { path: '**', component: ListaPostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
