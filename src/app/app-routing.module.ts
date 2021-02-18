import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaperListComponent } from './paper-list/paper-list.component';
import { PaperComponent } from './paper/paper.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  { path: '', component: PaperListComponent },
  { path: 'produit/:id', component: ProduitComponent },
  { path: 'all', component: PaperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
