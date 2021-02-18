import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paper } from '../Model/paper';
import { PaperServiceService } from '../services/paper-service.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
})
export class ProduitComponent implements OnInit {
  public publicPaper;
  public id;
  public idEdit: false;

  public formNom = '';
  public formTexture = '';
  public formGrammage = '';
  public formCouleur = '';

  constructor(
    private _papiers: PaperServiceService,
    private _router: Router,
    private _r: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._r.paramMap.subscribe((v) => {
      this.id = Number(v.get('id'));
      this.publicPaper = this._papiers.getSinglePaper(this.id - 1);
    });
  }

  editProduct() {
    this.publicPaper.nom = this.formNom;
    this.publicPaper.texture = this.formTexture;
    this.publicPaper.grammage = this.formGrammage;
    this.publicPaper.couleur = this.formCouleur;
  }

  addProduct() {
    let newPaper = new Paper();
    newPaper.id = this._papiers.getPapers().length + 1;
    newPaper.nom = this.formNom;
    newPaper.texture = this.formTexture;
    newPaper.grammage = this.formGrammage;
    newPaper.couleur = this.formCouleur;

    this._papiers.addPaper(newPaper);
    this._router.navigateByUrl('');
  }
}
