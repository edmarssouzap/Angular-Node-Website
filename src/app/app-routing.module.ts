import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './pages/contato/contato.component';
import { HomeComponent } from './pages/home/home.component';
import { VideosComponent } from './pages/videos/videos.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'videos', component:VideosComponent},
  {path:'contato', component:ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
