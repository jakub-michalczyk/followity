import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelebrityComponent } from './components/celebrity/celebrity.component';

const routes: Routes = [{ path: 'celebrity', component: CelebrityComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
