import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaperComponent } from './paper/paper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaperListComponent } from './paper-list/paper-list.component';
import { ProduitComponent } from './produit/produit.component';

@NgModule({
  declarations: [AppComponent, PaperComponent, PaperListComponent, ProduitComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
