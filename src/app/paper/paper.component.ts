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
    // on appelle notre liste de papier étant dans le service
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

  // Fait entrer la page en mode "sélection"
  onSelect(papier: Paper) {
    if (!this.selectedPaper) {
      this.sectionTitle = "Détail d'un produit"; // Changement du titre
      this.selectedPaper = papier;
      this.tooAdd = false;

      // Stockage des valeurs de base pour les restaurer en cas d'annulation
      this.tempNom = papier.nom;
      this.tempTexture = papier.texture;
      this.tempGrammage = papier.grammage;
      this.tempCouleur = papier.couleur;

      const allLi = document.querySelectorAll('li'); // Selecteur html

      // Permet de mettre les elements non selectioné en une couleur plus claire
      for (let i = 0; i < this.publicPaper.length; i++) {
        if (this.publicPaper[i].id != papier.id) {
          allLi[i].style.color = 'rgb(150, 150, 150)';
        } else {
          allLi[i].style.color = 'rgb(60, 60, 60)';
        }
      }
    }
  }

  // Fonction pour rétablir l'état initial
  onDeselect() {
    this.selectedPaper.nom = this.tempNom;
    this.selectedPaper.texture = this.tempTexture;
    this.selectedPaper.grammage = this.tempGrammage;
    this.selectedPaper.couleur = this.tempCouleur;

    this.selectedPaper = null;

    const allLi = document.querySelectorAll('li');
    // On reset la couleur des élements dans la liste
    for (let i = 0; i < this.publicPaper.length; i++) {
      allLi[i].style.color = 'rgb(60, 60, 60)';
    }
  }

  // Fonction qui initalise l'ajout de papier
  addPaper() {
    this.sectionTitle = 'Ajouter un produit';
    let newPaper = new Paper();
    newPaper.id = this._papiers.getPapers().length + 1;
    this.selectedPaper = newPaper;
    this.tooAdd = true;
  }

  // Fait la vérification du papier, pour ensuite l'ajouter
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
