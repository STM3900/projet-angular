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
  public idEdit = false;
  public verifForm = true;

  public formNom = '';
  public formTexture = '';
  public formGrammage = '';
  public formCouleur = '';

  public tempNom = '';
  public tempTexture = '';
  public tempGrammage = '';
  public tempCouleur = '';

  constructor(
    private _papiers: PaperServiceService,
    public _router: Router,
    private _r: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._r.paramMap.subscribe((v) => {
      this.id = Number(v.get('id'));
      this.publicPaper = this._papiers.getSinglePaper(this.id - 1);
    });
  }

  clickOnEdit() {
    this.tempNom = this.publicPaper.nom;
    this.tempTexture = this.publicPaper.texture;
    this.tempGrammage = this.publicPaper.grammage;
    this.tempCouleur = this.publicPaper.couleur;

    this.idEdit = !this.idEdit;
  }

  editProduct() {
    if (
      this.publicPaper.nom &&
      this.publicPaper.texture &&
      this.publicPaper.grammage &&
      this.publicPaper.couleur
    ) {
      this.idEdit = false;
    } else {
      this.verifForm = false;
      setTimeout(() => {
        this.verifForm = true;
      }, 300);
    }
  }

  addProduct() {
    if (
      this.formNom &&
      this.formTexture &&
      this.formGrammage &&
      this.formCouleur
    ) {
      let newPaper = new Paper();
      newPaper.id = this._papiers.getPapers().length + 1;
      newPaper.nom = this.formNom;
      newPaper.texture = this.formTexture;
      newPaper.grammage = this.formGrammage;
      newPaper.couleur = this.formCouleur;

      this._papiers.addPaper(newPaper);
      this._router.navigateByUrl('');
    } else {
      this.verifForm = false;
      setTimeout(() => {
        this.verifForm = true;
      }, 300);
    }
  }

  onDeselect() {
    this.idEdit = !this.idEdit;

    this.formNom = '';
    this.formTexture = '';
    this.formGrammage = '';
    this.formCouleur = '';

    this.publicPaper.nom = this.tempNom;
    this.publicPaper.texture = this.tempTexture;
    this.publicPaper.grammage = this.tempGrammage;
    this.publicPaper.couleur = this.tempCouleur;
  }
}
