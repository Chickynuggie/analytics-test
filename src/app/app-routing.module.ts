import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubpageComponent } from './components/subpage/subpage.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  { path: 'sub', component: SubpageComponent },
  { path: '', component: InfoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
