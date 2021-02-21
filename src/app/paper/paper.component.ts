import { Component, OnInit } from '@angular/core';
import { Paper } from '../Model/paper';
import { PaperServiceService } from '../services/paper-service.service';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css'],
})
export class PaperComponent implements OnInit {
  public publicPaper;

  constructor(private _papiers: PaperServiceService) {
    this.publicPaper = _papiers.getPapers();
  }

  public tooAdd = false;
  public sectionTitle = "Détail d'un produit";
  public verifForm = true;
  public activateStyle = false;

  public tempNom = '';
  public tempTexture = '';
  public tempGrammage = '';
  public tempCouleur = '';

  ngOnInit(): void {}

  public selectedPaper;

  onSelect(papier: Paper) {
    if (!this.selectedPaper) {
      this.sectionTitle = "Détail d'un produit";
      this.selectedPaper = papier;
      this.tooAdd = false;

      this.tempNom = papier.nom;
      this.tempTexture = papier.texture;
      this.tempGrammage = papier.grammage;
      this.tempCouleur = papier.couleur;

      const allLi = document.querySelectorAll('li');

      for (let i = 0; i < this.publicPaper.length; i++) {
        if (this.publicPaper[i].id != papier.id) {
          allLi[i].style.color = 'rgb(150, 150, 150)';
        } else {
          allLi[i].style.color = 'rgb(60, 60, 60)';
        }
      }
    }
  }

  onDeselect() {
    this.selectedPaper.nom = this.tempNom;
    this.selectedPaper.texture = this.tempTexture;
    this.selectedPaper.grammage = this.tempGrammage;
    this.selectedPaper.couleur = this.tempCouleur;

    this.selectedPaper = null;

    const allLi = document.querySelectorAll('li');
    for (let i = 0; i < this.publicPaper.length; i++) {
      allLi[i].style.color = 'rgb(60, 60, 60)';
    }
  }

  addPaper() {
    this.sectionTitle = 'Ajouter un produit';
    let newPaper = new Paper();
    newPaper.id = this._papiers.getPapers().length + 1;
    this.selectedPaper = newPaper;
    this.tooAdd = true;
  }

  onValidate() {
    for (const i in this.selectedPaper) {
      if (this.selectedPaper[i] == '') {
        this.verifForm = false;
      }
    }
    if (this.verifForm) {
      if (this.tooAdd) {
        this._papiers.addPaper(this.selectedPaper);
        this.selectedPaper = null;
      }
    } else {
      this.verifForm = false;
      setTimeout(() => {
        this.verifForm = true;
      }, 300);
    }
  }
}
